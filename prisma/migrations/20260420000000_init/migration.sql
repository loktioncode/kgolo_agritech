-- CreateTable
CREATE TABLE "farmers" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "id_number" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "photo_path" VARCHAR(500),
    "consent_given" INTEGER NOT NULL DEFAULT 0,
    "consent_date" VARCHAR(30),
    "address" TEXT,
    "farm_latitude" DOUBLE PRECISION,
    "farm_longitude" DOUBLE PRECISION,
    "farm_accuracy" DOUBLE PRECISION,
    "created_at" VARCHAR(30) NOT NULL,
    "updated_at" VARCHAR(30) NOT NULL,
    "sync_version" INTEGER NOT NULL DEFAULT 0,
    "last_synced_at" VARCHAR(30),

    CONSTRAINT "farmers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(36) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "farmer_id" VARCHAR(36),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parcels" (
    "id" VARCHAR(36) NOT NULL,
    "farmer_id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "accuracy" DOUBLE PRECISION,
    "created_at" VARCHAR(30) NOT NULL,
    "updated_at" VARCHAR(30) NOT NULL,
    "sync_version" INTEGER NOT NULL DEFAULT 0,
    "last_synced_at" VARCHAR(30),

    CONSTRAINT "parcels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animals" (
    "id" VARCHAR(36) NOT NULL,
    "farmer_id" VARCHAR(36) NOT NULL,
    "species" VARCHAR(50) NOT NULL,
    "breed" VARCHAR(100),
    "birth_date" VARCHAR(20),
    "ear_tag" VARCHAR(100),
    "photo_path" VARCHAR(500),
    "parcel_id" VARCHAR(36),
    "deleted_at" VARCHAR(30),
    "created_at" VARCHAR(30) NOT NULL,
    "updated_at" VARCHAR(30) NOT NULL,
    "sync_version" INTEGER NOT NULL DEFAULT 0,
    "last_synced_at" VARCHAR(30),

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activities" (
    "id" VARCHAR(36) NOT NULL,
    "farmer_id" VARCHAR(36) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "timestamp" VARCHAR(30) NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "accuracy" DOUBLE PRECISION,
    "parcel_id" VARCHAR(36),
    "animal_id" VARCHAR(36),
    "animal_ids" TEXT,
    "notes" TEXT,
    "photo_path" VARCHAR(500),
    "created_at" VARCHAR(30) NOT NULL,
    "updated_at" VARCHAR(30) NOT NULL,
    "sync_version" INTEGER NOT NULL DEFAULT 0,
    "last_synced_at" VARCHAR(30),

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_parcel_id_fkey" FOREIGN KEY ("parcel_id") REFERENCES "parcels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_parcel_id_fkey" FOREIGN KEY ("parcel_id") REFERENCES "parcels"("id") ON DELETE SET NULL ON UPDATE CASCADE;
