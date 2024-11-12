/*
  Warnings:

  - You are about to drop the column `bookBook_id` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Publisher` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[isbn]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorAuthor_id` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publication_date` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorAuthor_id_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_publisherPublisher_id_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_bookBook_id_fkey";

-- DropIndex
DROP INDEX "Inventory_bookBook_id_key";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "bookBook_id",
DROP COLUMN "created_at",
DROP COLUMN "quantity",
DROP COLUMN "updated_at",
ADD COLUMN     "authorAuthor_id" UUID NOT NULL,
ADD COLUMN     "genre" "Genre"[],
ADD COLUMN     "isbn" TEXT NOT NULL,
ADD COLUMN     "publication_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "Publisher";

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_isbn_key" ON "Inventory"("isbn");

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_authorAuthor_id_fkey" FOREIGN KEY ("authorAuthor_id") REFERENCES "Author"("author_id") ON DELETE RESTRICT ON UPDATE CASCADE;
