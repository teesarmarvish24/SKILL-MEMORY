import { defineConfig } from "drizzle-kit";

// `npm run db:generate` turns src/db/schema.ts into SQL migrations in ./drizzle.
// The app applies them automatically on first use (PGlite locally, Supabase in production).
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
});
