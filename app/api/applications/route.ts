import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  currentStatus: string;
  college: string;
  linkedIn: string;
  portfolio: string;
  whyNovpreneur: string;
  whatBuilt: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}

async function applicationsCollection() {
  const db = await getDb();
  return db.collection<Application>("applications");
}

export async function GET() {
  const col = await applicationsCollection();
  const apps = await col.find({}).sort({ submittedAt: -1 }).toArray();
  return NextResponse.json(apps);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { fullName, email, phone, currentStatus, college, linkedIn, portfolio, whyNovpreneur, whatBuilt } = body;

  if (!fullName || !email || !whyNovpreneur) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const app: Application = {
    id: `APP-${Date.now().toString(36).toUpperCase()}`,
    fullName,
    email,
    phone: phone || "",
    currentStatus: currentStatus || "",
    college: college || "",
    linkedIn: linkedIn || "",
    portfolio: portfolio || "",
    whyNovpreneur,
    whatBuilt: whatBuilt || "",
    status: "pending",
    submittedAt: new Date().toISOString(),
  };

  const col = await applicationsCollection();
  await col.insertOne(app as any);

  return NextResponse.json({ success: true, id: app.id }, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const { id, status } = await req.json();

  if (!id || !["approved", "rejected", "pending"].includes(status)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const col = await applicationsCollection();
  const result = await col.findOneAndUpdate(
    { id },
    { $set: { status } },
    { returnDocument: "after" }
  );

  if (!result) {
    return NextResponse.json({ error: "Application not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
