// Stub tRPC client for static frontend build
// No backend required — all API calls are bypassed

export const trpc = {
  useQuery: () => ({ data: null, isLoading: false, error: null }),
  useMutation: () => ({ mutate: () => {}, isLoading: false, error: null }),
  useInfiniteQuery: () => ({ data: null, isLoading: false, error: null, fetchNextPage: () => {} }),
};

export function createTRPCClient() {
  return {};
}
