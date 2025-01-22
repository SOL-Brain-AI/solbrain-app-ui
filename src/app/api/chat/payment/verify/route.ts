import { verifyTransaction } from "@/lib/solana";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { signature } = await req.json();

    if (!signature) {
      return NextResponse.json(
        { error: "Missing transaction signature" },
        { status: 400 }
      );
    }

    const isValid = await verifyTransaction(signature);

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid or failed transaction" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
