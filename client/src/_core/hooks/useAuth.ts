import { useState, useCallback } from "react";

// Stub auth hook for static frontend build
// No backend required — all auth functionality is bypassed
export function useAuth() {
  const [loading] = useState(false);
  const [error] = useState(null);
  const [isAuthenticated] = useState(false);
  const [user] = useState(null);

  const logout = useCallback(() => {
    console.log("Logout stub — no backend");
  }, []);

  const getLoginUrl = useCallback(() => {
    return "/register";
  }, []);

  return { user, loading, error, isAuthenticated, logout, getLoginUrl };
}
