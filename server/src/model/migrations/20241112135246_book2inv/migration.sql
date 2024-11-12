/*
  Warnings:

  - A unique constraint covering the columns `[bookBook_id]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Inventory_bookBook_id_key" ON "Inventory"("bookBook_id");
