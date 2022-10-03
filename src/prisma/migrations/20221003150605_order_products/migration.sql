-- CreateTable
CREATE TABLE `orderProducts` (
    `orderId` INTEGER NOT NULL,
    `prodectId` INTEGER NOT NULL,
    `quantityTaken` INTEGER NOT NULL,

    PRIMARY KEY (`orderId`, `prodectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orderProducts` ADD CONSTRAINT `orderProducts_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderProducts` ADD CONSTRAINT `orderProducts_prodectId_fkey` FOREIGN KEY (`prodectId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
