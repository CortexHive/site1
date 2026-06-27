import { PrismaClient } from "../../prisma/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = (() => {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  // Ensure database file path works correctly in local development
  const dbPath = path.join(process.cwd(), "prisma", "dev.db");
  
  // Pass configuration object to the Prisma SQLite driver adapter
  const adapter = new PrismaBetterSqlite3({ url: dbPath });
  const client = new PrismaClient({ adapter });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }

  return client;
})();
