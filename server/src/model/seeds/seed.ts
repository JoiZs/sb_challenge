import { $Enums, PrismaClient } from "@prisma/client";
import invJson from "./inv.json";

const prisma = new PrismaClient();

(async () => {
  const tempJson = invJson;
  tempJson.forEach(async (el) => {
    let newAuthor = await prisma.author.findFirst({
      where: el.book.author,
    });

    let newPublisher = await prisma.publisher.findFirst({
      where: el.book.publisher,
    });

    if (!newAuthor)
      newAuthor = await prisma.author.create({
        data: el.book.author,
      });

    if (!newPublisher)
      newPublisher = await prisma.publisher.create({
        data: el.book.publisher,
      });

    const newBook = await prisma.book.create({
      data: {
        title: el.book.title,
        isbn: el.book.isbn,
        authorAuthor_id: newAuthor.author_id,
        publisherPublisher_id: newPublisher.publisher_id,
        genre: {
          set: el.book.genre as $Enums.Genre[],
        },
        publication_date: el.book.publication_date,
      },
    });

    const newInv = await prisma.inventory.create({
      data: {
        quantity: el.quantity,
        bookBook_id: newBook.book_id,
      },
    });

    console.log(
      `Created an inv: ${newInv.entry_id}, book:${newBook.book_id}, publisher:${newPublisher.publisher_id}, author:${newAuthor.author_id}`,
    );
  });
})();
