import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createUploadedFile, getUserFiles, getFileById } from "./db";
import { storagePut } from "./storage";
import { nanoid } from "nanoid";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    // Upload file metadata and get S3 upload URL
    initiateUpload: protectedProcedure
      .input(
        z.object({
          filename: z.string(),
          mimeType: z.string(),
          fileSize: z.number(),
          documentType: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.user.id;
        const fileExtension = input.filename.split(".").pop() || "";
        const randomSuffix = nanoid(10);
        const fileKey = `user-${userId}/documents/${Date.now()}-${randomSuffix}.${fileExtension}`;

        // Return the file key for client-side upload
        return {
          fileKey,
          userId,
        };
      }),

    // Confirm upload and save to database
    confirmUpload: protectedProcedure
      .input(
        z.object({
          filename: z.string(),
          fileKey: z.string(),
          fileUrl: z.string(),
          mimeType: z.string(),
          fileSize: z.number(),
          documentType: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.user.id;

        await createUploadedFile({
          userId,
          filename: input.filename,
          fileKey: input.fileKey,
          fileUrl: input.fileUrl,
          mimeType: input.mimeType,
          fileSize: input.fileSize,
          documentType: input.documentType,
          status: "uploaded",
        });

        return { success: true };
      }),

    // Get user's uploaded files
    list: protectedProcedure.query(async ({ ctx }) => {
      const userId = ctx.user.id;
      return await getUserFiles(userId);
    }),

    // Get single file by ID
    getById: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .query(async ({ ctx, input }) => {
        const file = await getFileById(input.fileId);
        if (!file || file.userId !== ctx.user.id) {
          throw new Error("File not found or access denied");
        }
        return file;
      }),

    // Upload file directly (for smaller files)
    uploadDirect: protectedProcedure
      .input(
        z.object({
          filename: z.string(),
          fileData: z.string(), // base64 encoded
          mimeType: z.string(),
          documentType: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.user.id;
        const fileExtension = input.filename.split(".").pop() || "";
        const randomSuffix = nanoid(10);
        const fileKey = `user-${userId}/documents/${Date.now()}-${randomSuffix}.${fileExtension}`;

        // Decode base64 and upload to S3
        const fileBuffer = Buffer.from(input.fileData, "base64");
        const { url } = await storagePut(fileKey, fileBuffer, input.mimeType);

        // Save to database
        await createUploadedFile({
          userId,
          filename: input.filename,
          fileKey,
          fileUrl: url,
          mimeType: input.mimeType,
          fileSize: fileBuffer.length,
          documentType: input.documentType,
          status: "uploaded",
        });

        return { success: true, fileUrl: url };
      }),
  }),
});

export type AppRouter = typeof appRouter;
