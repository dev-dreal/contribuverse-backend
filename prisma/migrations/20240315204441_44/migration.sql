/*
  Warnings:

  - Added the required column `followingUserId` to the `followers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "followers" ADD COLUMN     "followingUserId" TEXT NOT NULL;
