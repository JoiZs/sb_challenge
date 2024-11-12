/*
  Warnings:

  - You are about to drop the column `author_id` on the `Book` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Genre" ADD VALUE 'DRAMA';

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "author_id";
