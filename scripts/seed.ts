/**
 * Seed script: Migrate existing JSON data to MongoDB
 * Run: npx tsx scripts/seed.ts
 */

import { MongoClient } from "mongodb";
import { readFile } from "fs/promises";
import path from "path";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/novpreneur";

async function seed() {
  console.log("🔌 Connecting to MongoDB...");
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db("novpreneur");

  console.log("✅ Connected to MongoDB\n");

  // Seed users
  try {
    const usersFile = path.join(process.cwd(), "data", "users.json");
    const usersData = JSON.parse(await readFile(usersFile, "utf-8"));

    if (usersData.length > 0) {
      const usersCol = db.collection("users");
      
      // Create indexes
      await usersCol.createIndex({ email: 1 }, { unique: true });
      await usersCol.createIndex({ id: 1 }, { unique: true });

      // Insert users (skip duplicates)
      for (const user of usersData) {
        try {
          await usersCol.insertOne(user);
          console.log(`  ✅ User: ${user.fullName} (${user.email})`);
        } catch (err: any) {
          if (err.code === 11000) {
            console.log(`  ⏭️  User already exists: ${user.email}`);
          } else {
            throw err;
          }
        }
      }
      console.log(`\n📦 ${usersData.length} user(s) processed`);
    }
  } catch (err: any) {
    if (err.code === "ENOENT") {
      console.log("ℹ️  No users.json found, skipping users seed");
    } else {
      throw err;
    }
  }

  // Seed applications
  try {
    const appsFile = path.join(process.cwd(), "data", "applications.json");
    const appsData = JSON.parse(await readFile(appsFile, "utf-8"));

    if (appsData.length > 0) {
      const appsCol = db.collection("applications");

      // Create indexes
      await appsCol.createIndex({ id: 1 }, { unique: true });
      await appsCol.createIndex({ status: 1 });

      // Insert applications (skip duplicates)
      for (const app of appsData) {
        try {
          await appsCol.insertOne(app);
          console.log(`  ✅ Application: ${app.fullName} (${app.id})`);
        } catch (err: any) {
          if (err.code === 11000) {
            console.log(`  ⏭️  Application already exists: ${app.id}`);
          } else {
            throw err;
          }
        }
      }
      console.log(`\n📦 ${appsData.length} application(s) processed`);
    }
  } catch (err: any) {
    if (err.code === "ENOENT") {
      console.log("ℹ️  No applications.json found, skipping applications seed");
    } else {
      throw err;
    }
  }

  console.log("\n🎉 Seed complete! MongoDB is ready.");
  await client.close();
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
