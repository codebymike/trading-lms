import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function createCategories() {
  try {
    const categories = [
      { name: "Finance" },
      { name: "Blockchain" },
      { name: "Accounting" },
      { name: "Taxes" },
      { name: "Other" },
    ];

    for (const category of categories) {
      await db.category.create({ data: category });
    }
  } catch (error) {
    console.error("Error creating categories:", error);
  } finally {
    await db.$disconnect();
  }
}
