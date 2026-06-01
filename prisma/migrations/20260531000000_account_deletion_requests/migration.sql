-- CreateTable
CREATE TABLE "account_deletion_requests" (
    "id" VARCHAR(36) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "reason" TEXT NOT NULL,
    "farmer_id" VARCHAR(36),
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_deletion_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "account_deletion_requests_phone_idx" ON "account_deletion_requests"("phone");

-- CreateIndex
CREATE INDEX "account_deletion_requests_status_idx" ON "account_deletion_requests"("status");
