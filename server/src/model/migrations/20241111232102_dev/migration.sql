-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('FANTASY', 'SCIENCEFICTION', 'DYSTOPIAN', 'ADVENTURE', 'ROMANCE', 'MYSTERY', 'HORROR', 'THRILLER', 'HISTORIALFICTION', 'CHILDRENFICTION');

-- CreateTable
CREATE TABLE "Author" (
    "author_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "biography" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("author_id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "publisher_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("publisher_id")
);

-- CreateTable
CREATE TABLE "Book" (
    "book_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "publication_date" TIMESTAMP(3) NOT NULL,
    "isbn" TEXT NOT NULL,
    "genre" "Genre"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "author_id" TEXT NOT NULL,
    "publisherPublisher_id" UUID NOT NULL,
    "authorAuthor_id" UUID NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "entry_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "authorAuthor_id" UUID NOT NULL,
    "bookBook_id" UUID NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("entry_id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorAuthor_id_fkey" FOREIGN KEY ("authorAuthor_id") REFERENCES "Author"("author_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisherPublisher_id_fkey" FOREIGN KEY ("publisherPublisher_id") REFERENCES "Publisher"("publisher_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_bookBook_id_fkey" FOREIGN KEY ("bookBook_id") REFERENCES "Book"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;
