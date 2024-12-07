-- CreateTable
CREATE TABLE `tp` (
    `judul` VARCHAR(191) NOT NULL,
    `subJudul` VARCHAR(100) NOT NULL,
    `kategori` VARCHAR(100) NOT NULL,
    `TanggalPost` DATETIME NOT NULL,
    `DeadlineTP` DATETIME NOT NULL,
    `DeskripsiTP` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`judul`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
