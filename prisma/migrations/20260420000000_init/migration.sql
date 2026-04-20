-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(36) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `farmer_id` VARCHAR(36) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farmers` (
    `id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `id_number` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(50) NOT NULL,
    `photo_path` VARCHAR(500) NULL,
    `consent_given` INTEGER NOT NULL DEFAULT 0,
    `consent_date` VARCHAR(30) NULL,
    `address` TEXT NULL,
    `farm_latitude` DOUBLE NULL,
    `farm_longitude` DOUBLE NULL,
    `farm_accuracy` DOUBLE NULL,
    `created_at` VARCHAR(30) NOT NULL,
    `updated_at` VARCHAR(30) NOT NULL,
    `sync_version` INTEGER NOT NULL DEFAULT 0,
    `last_synced_at` VARCHAR(30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parcels` (
    `id` VARCHAR(36) NOT NULL,
    `farmer_id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `accuracy` DOUBLE NULL,
    `created_at` VARCHAR(30) NOT NULL,
    `updated_at` VARCHAR(30) NOT NULL,
    `sync_version` INTEGER NOT NULL DEFAULT 0,
    `last_synced_at` VARCHAR(30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animals` (
    `id` VARCHAR(36) NOT NULL,
    `farmer_id` VARCHAR(36) NOT NULL,
    `species` VARCHAR(50) NOT NULL,
    `breed` VARCHAR(100) NULL,
    `birth_date` VARCHAR(20) NULL,
    `ear_tag` VARCHAR(100) NULL,
    `photo_path` VARCHAR(500) NULL,
    `parcel_id` VARCHAR(36) NULL,
    `deleted_at` VARCHAR(30) NULL,
    `created_at` VARCHAR(30) NOT NULL,
    `updated_at` VARCHAR(30) NOT NULL,
    `sync_version` INTEGER NOT NULL DEFAULT 0,
    `last_synced_at` VARCHAR(30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activities` (
    `id` VARCHAR(36) NOT NULL,
    `farmer_id` VARCHAR(36) NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `timestamp` VARCHAR(30) NOT NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `accuracy` DOUBLE NULL,
    `parcel_id` VARCHAR(36) NULL,
    `animal_id` VARCHAR(36) NULL,
    `animal_ids` TEXT NULL,
    `notes` TEXT NULL,
    `photo_path` VARCHAR(500) NULL,
    `created_at` VARCHAR(30) NOT NULL,
    `updated_at` VARCHAR(30) NOT NULL,
    `sync_version` INTEGER NOT NULL DEFAULT 0,
    `last_synced_at` VARCHAR(30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_farmer_id_fkey` FOREIGN KEY (`farmer_id`) REFERENCES `farmers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `parcels` ADD CONSTRAINT `parcels_farmer_id_fkey` FOREIGN KEY (`farmer_id`) REFERENCES `farmers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_farmer_id_fkey` FOREIGN KEY (`farmer_id`) REFERENCES `farmers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_parcel_id_fkey` FOREIGN KEY (`parcel_id`) REFERENCES `parcels`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activities` ADD CONSTRAINT `activities_farmer_id_fkey` FOREIGN KEY (`farmer_id`) REFERENCES `farmers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activities` ADD CONSTRAINT `activities_parcel_id_fkey` FOREIGN KEY (`parcel_id`) REFERENCES `parcels`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

