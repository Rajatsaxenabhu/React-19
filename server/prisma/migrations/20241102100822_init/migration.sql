/*
  Warnings:

  - You are about to drop the column `conversationID` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "conversationID",
ADD COLUMN     "chatId" TEXT[];
