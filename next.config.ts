import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // PGlite (embedded Postgres for local dev) ships WASM files: load it from node_modules.
  serverExternalPackages: ["@electric-sql/pglite"],
  // Migrations are read from disk at runtime; make sure they ship with the server bundle.
  outputFileTracingIncludes: { "/**": ["./drizzle/**"] },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
