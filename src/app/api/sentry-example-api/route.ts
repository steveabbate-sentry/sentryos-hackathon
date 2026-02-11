import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  throw new Error("Sentry Backend Test Error");
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
