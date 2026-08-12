import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Server-only client — uses the service_role key, which bypasses Row Level
// Security. NEVER expose this key to the browser or commit it to git.
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Simple in-memory de-dupe so a single page load (which may fire the
// tracker once per route change) doesn't spam ip-api.com. Not persisted
// across serverless cold starts, which is fine for a personal portfolio.
const recentIps = new Map<string, number>();
const DEDUPE_WINDOW_MS = 5000;

function getClientIp(req: NextRequest): string {
  // Vercel sets x-forwarded-for; the first entry is the real client IP.
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const { page } = await req.json();
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent") ?? "unknown";

    const now = Date.now();
    const last = recentIps.get(ip + page);
    if (last && now - last < DEDUPE_WINDOW_MS) {
      return NextResponse.json({ skipped: true });
    }
    recentIps.set(ip + page, now);

    let city: string | null = null;
    let region: string | null = null;
    let country: string | null = null;

    // Skip geolocation for local/dev IPs, ip-api.com can't resolve them.
    if (ip !== "unknown" && ip !== "127.0.0.1" && !ip.startsWith("::1")) {
      try {
        const geoRes = await fetch(
          `http://ip-api.com/json/${ip}?fields=status,city,region,country`
        );
        const geo = await geoRes.json();
        if (geo.status === "success") {
          city = geo.city ?? null;
          region = geo.region ?? null;
          country = geo.country ?? null;
        }
      } catch {
        // Geolocation is best-effort — a failed lookup shouldn't block logging.
      }
    }

    const { error } = await supabase.from("visits").insert({
      ip,
      city,
      region,
      country,
      page,
      user_agent: userAgent,
    });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Tracking error:", err);
    // Always return 200-ish so tracking failures never surface to visitors.
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}