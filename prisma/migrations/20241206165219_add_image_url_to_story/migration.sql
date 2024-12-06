-- DropForeignKey
ALTER TABLE `StoryFavorites` DROP FOREIGN KEY `StoryFavorites_storyId_fkey`;

-- AlterTable
ALTER TABLE `Story` ADD COLUMN `imageUrl` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `StoryFavorites` ADD CONSTRAINT `StoryFavorites_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
