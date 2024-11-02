/*
  Warnings:

  - You are about to drop the column `media_type` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `media_url` on the `Message` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "messageId" TEXT[],
ADD COLUMN     "participantId" TEXT[];

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "media_type",
DROP COLUMN "media_url",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "conversationID" TEXT[];
