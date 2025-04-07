import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { user } from "./schema";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { eq } from "drizzle-orm";

config({
  path: ".env.local",
});

const userConfigSeed = async () => {
  if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL is not defined");
  }

  const connection = postgres(process.env.POSTGRES_URL, { max: 1 });
  const db = drizzle(connection);

  try {
    const existedAdmin = await db
      .select()
      .from(user)
      .where(eq(user.email, "admin"));
    if (existedAdmin.length > 0) {
      console.log("❌ admin user is already exist: ", existedAdmin);
      return "admin user is already exist!";
    } else {
      const salt = genSaltSync(10);
      const hash = hashSync("admin", salt);
      const createdAdmin = await db
        .insert(user)
        .values({ email: "admin", password: hash, role: "admin" });
      console.log("✅ admin user is created successfully: ", createdAdmin);
      return "admin user is created successfully!";
    }
  } finally {
    await connection.end();
  }
};

userConfigSeed()
  .then(() => {
    console.log("Seeding completed successfully.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });
