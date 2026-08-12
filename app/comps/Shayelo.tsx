"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Shayelo() {
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {
      // Silently ignore — a visitor should never notice tracking exists.
    });
  }, [pathname]);

  return null;
}