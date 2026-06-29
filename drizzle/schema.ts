import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Uploaded files table for tracking user document uploads
 * Stores metadata and S3 references for thesis chapters, manuscripts, etc.
 */
export const uploadedFiles = mysqlTable("uploadedFiles", {
  id: int("id").autoincrement().primaryKey(),
  /** User who uploaded the file */
  userId: int("userId").notNull(),
  /** Original filename */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** S3 file key for retrieval */
  fileKey: varchar("fileKey", { length: 512 }).notNull(),
  /** Public S3 URL */
  fileUrl: text("fileUrl").notNull(),
  /** MIME type */
  mimeType: varchar("mimeType", { length: 100 }),
  /** File size in bytes */
  fileSize: int("fileSize"),
  /** Document type: thesis chapter, journal paper, etc. */
  documentType: varchar("documentType", { length: 100 }),
  /** Upload status */
  status: mysqlEnum("status", ["pending", "uploaded", "processing", "completed", "failed"]).default("uploaded").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UploadedFile = typeof uploadedFiles.$inferSelect;
export type InsertUploadedFile = typeof uploadedFiles.$inferInsert;