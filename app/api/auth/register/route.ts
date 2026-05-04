import { NextRequest, NextResponse } from "next/server";
import { hashPassword, generateVerificationCode } from "@/lib/auth";
import { findUserByEmail, createUser } from "@/lib/users";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "Full name, email, and password are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    const existing = await findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const code = generateVerificationCode();
    const codeExpiry = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 min

    const passwordHash = await hashPassword(password);

    const user = {
      id: `USR-${Date.now().toString(36).toUpperCase()}`,
      fullName,
      email: email.toLowerCase(),
      passwordHash,
      role: "user" as const,
      emailVerified: false,
      verificationCode: code,
      verificationCodeExpiry: codeExpiry,
      createdAt: new Date().toISOString(),
    };

    await createUser(user);

    // In production, send email here. For dev, log to console.
    console.log(`\n📧 VERIFICATION CODE for ${email}: ${code}\n`);

    return NextResponse.json(
      {
        success: true,
        message: "Account created. Please verify your email.",
        email: user.email,
        // Only include code in dev response — NEVER in production
        ...(process.env.NODE_ENV !== "production" && { verificationCode: code }),
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
