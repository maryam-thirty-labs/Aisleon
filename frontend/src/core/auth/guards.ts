"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/core/auth/session";

export function useRequireAuth(): void {
  const router = useRouter();

  useEffect(() => {
    // TEMP DEV BYPASS — restore the redirect below to re-enable auth gating
    return;
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);
}
