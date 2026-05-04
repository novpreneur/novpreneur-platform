import { getDb } from "./db";

export interface User {
  id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  role: "user" | "admin";
  emailVerified: boolean;
  verificationCode: string | null;
  verificationCodeExpiry: string | null;
  createdAt: string;
}

function usersCollection() {
  return getDb().then((db) => db.collection<User>("users"));
}

export async function getUsers(): Promise<User[]> {
  const col = await usersCollection();
  return col.find({}).toArray() as unknown as User[];
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const col = await usersCollection();
  return col.findOne({ email: email.toLowerCase() }) as unknown as User | null;
}

export async function findUserById(id: string): Promise<User | null> {
  const col = await usersCollection();
  return col.findOne({ id }) as unknown as User | null;
}

export async function createUser(user: User) {
  const col = await usersCollection();
  await col.insertOne(user as any);
}

export async function updateUser(id: string, updates: Partial<User>) {
  const col = await usersCollection();
  const result = await col.findOneAndUpdate(
    { id },
    { $set: updates },
    { returnDocument: "after" }
  );
  return result as unknown as User | null;
}

// Ensure indexes on first load
export async function ensureIndexes() {
  const col = await usersCollection();
  await col.createIndex({ email: 1 }, { unique: true });
  await col.createIndex({ id: 1 }, { unique: true });
}
