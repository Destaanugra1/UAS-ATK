import { PrismaClient } from "@prisma/client";

// Declare a global type for Prisma to avoid multiple instantiations in development
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma client, either using an existing instance or creating a new one
export const prisma = globalThis.prisma || new PrismaClient();

// Assign the Prisma instance to `globalThis` in non-production environments to preserve the instance
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
