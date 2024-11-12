import { $Enums, PrismaClient } from "@prisma/client";
import invJson from "./inv.json";

const prisma = new PrismaClient();

(async () => {
  const tempJson = invJson;
  tempJson.forEach(async (el) => {
    let newAuthor = await prisma.author.findFirst({
      where: el.book.author,
    });

    if (!newAuthor)
      newAuthor = await prisma.author.create({
        data: el.book.author,
      });

    const newInv = await prisma.inventory.create({
      data: {
        title: el.book.title,
        isbn: el.book.isbn,
        genre: {
          set: el.book.genre as $Enums.Genre[],
        },
        publication_date: el.book.publication_date,
        authorAuthor_id: newAuthor.author_id,
      },
    });

    console.log(
      `Created an inv: ${newInv.entry_id}, author:${newAuthor.author_id}`,
    );
  });
})();
