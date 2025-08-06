import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"

// Always try to load .env.local (fails silently if not present)
config({ path: ".env.local" })

// Fallback: if still not defined, throw a useful error
const dbUrl = process.env.DATABASE_URL
if (!dbUrl) {
  throw new Error("DATABASE_URL is not defined. Please set it in .env.local or .env")
}

const sql = neon(dbUrl)
const db = drizzle(sql)

export { db }