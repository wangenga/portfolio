"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {
      // Silently ignore — a visitor should never notice tracking exists.
    });
  }, [pathname]);

  return null;
}