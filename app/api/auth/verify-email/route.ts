import { NextRequest, NextResponse } from "next/server";
import { findUserByEmail, updateUser } from "@/lib/users";
import { generateVerificationCode } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email and verification code are required." },
        { status: 400 }
      );
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return NextResponse.json(
        { error: "No account found with this email." },
        { status: 404 }
      );
    }

    if (user.emailVerified) {
      return NextResponse.json(
        { error: "Email is already verified." },
        { status: 400 }
      );
    }

    if (user.verificationCode !== code) {
      return NextResponse.json(
        { error: "Invalid verification code." },
        { status: 400 }
      );
    }

    if (
      user.verificationCodeExpiry &&
      new Date(user.verificationCodeExpiry) < new Date()
    ) {
      return NextResponse.json(
        { error: "Verification code has expired. Please request a new one." },
        { status: 400 }
      );
    }

    await updateUser(user.id, {
      emailVerified: true,
      verificationCode: null,
      verificationCodeExpiry: null,
    });

    return NextResponse.json({ success: true, message: "Email verified successfully." });
  } catch {
    return NextResponse.json(
      { error: "Verification failed." },
      { status: 500 }
    );
  }
}

// Resend verification code
export async function PATCH(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return NextResponse.json({ error: "No account found." }, { status: 404 });
    }

    if (user.emailVerified) {
      return NextResponse.json({ error: "Already verified." }, { status: 400 });
    }

    const code = generateVerificationCode();
    const expiry = new Date(Date.now() + 15 * 60 * 1000).toISOString();

    await updateUser(user.id, {
      verificationCode: code,
      verificationCodeExpiry: expiry,
    });

    console.log(`\n📧 NEW VERIFICATION CODE for ${email}: ${code}\n`);

    return NextResponse.json({
      success: true,
      message: "New code sent.",
      ...(process.env.NODE_ENV !== "production" && { verificationCode: code }),
    });
  } catch {
    return NextResponse.json({ error: "Failed to resend." }, { status: 500 });
  }
}
