/*
  Warnings:

  - You are about to alter the column `latlong` on the `stories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `stories` MODIFY `latlong` JSON NOT NULL;
