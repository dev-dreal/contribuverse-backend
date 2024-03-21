-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_userId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "profile_images" SET DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eFYtMaXpWfthEAKY-smUSscnI0GjPGfTWdfaBYEBF1HhPucmwHF9ESBdEYqjz63ocxM&usqp=CAU';
