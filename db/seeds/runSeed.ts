import dotenv from 'dotenv';
dotenv.config();  // This loads the .env file

import seed from "./seed";
import { prisma } from "../prisma.server";

const runSeed = async () => {
  try {
    await seed();
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

runSeed();
