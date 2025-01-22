import { PrivyClient } from "@privy-io/server-auth";
import { NextRequest, NextResponse } from "next/server";

const privy = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
  process.env.PRIVY_APP_SECRET!
);

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Missing or invalid authorization header" },
        { status: 401 }
      );
    }

    const token = authHeader.slice(7); // Remove 'Bearer ' prefix
    const { userId } = await privy.verifyAuthToken(token);

    return NextResponse.json({ verified: true, userId });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Invalid authentication token" },
      { status: 401 }
    );
  }
}
