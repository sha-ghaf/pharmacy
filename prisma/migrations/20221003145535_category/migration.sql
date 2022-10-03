/*
  Warnings:

  - A unique constraint covering the columns `[categoryId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `category_categoryName_key`(`categoryName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Product_categoryId_key` ON `Product`(`categoryId`);

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_id_fkey` FOREIGN KEY (`id`) REFERENCES `Product`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
