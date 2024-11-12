/*
  Warnings:

  - You are about to drop the column `authorAuthor_id` on the `Inventory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorAuthor_id_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_publisherPublisher_id_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "publisherPublisher_id" DROP NOT NULL,
ALTER COLUMN "authorAuthor_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "authorAuthor_id";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorAuthor_id_fkey" FOREIGN KEY ("authorAuthor_id") REFERENCES "Author"("author_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisherPublisher_id_fkey" FOREIGN KEY ("publisherPublisher_id") REFERENCES "Publisher"("publisher_id") ON DELETE SET NULL ON UPDATE CASCADE;
