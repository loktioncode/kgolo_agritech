import { normalizeEmail, normalizeSouthAfricanMobile } from '@/lib/farmer-validation';
import { prisma } from '@/lib/db';

/** Anonymise farmer PII and remove linked farm records (POPIA / Play deletion). */
export async function anonymizeFarmerAndData(farmerId: string): Promise<void> {
  const now = new Date().toISOString();

  await prisma.$transaction(async (tx) => {
    await tx.activity.deleteMany({ where: { farmer_id: farmerId } });
    await tx.animal.deleteMany({ where: { farmer_id: farmerId } });
    await tx.parcel.deleteMany({ where: { farmer_id: farmerId } });

    await tx.farmer.update({
      where: { id: farmerId },
      data: {
        name: '[deleted]',
        id_number: '[deleted]',
        phone: '[deleted]',
        email: null,
        address: null,
        photo_path: null,
        consent_given: 0,
        consent_date: null,
        farm_latitude: null,
        farm_longitude: null,
        farm_accuracy: null,
        updated_at: now,
      },
    });

    await tx.user.updateMany({
      where: { farmer_id: farmerId },
      data: { farmer_id: null },
    });
  });
}

export type ProcessDeletionResult = {
  requestId: string;
  farmerMatched: boolean;
  farmerAnonymized: boolean;
};

/** Store deletion request; anonymize when phone or email matches a farmer record. */
export async function processAccountDeletionRequest(input: {
  phone: string;
  reason: string;
}): Promise<ProcessDeletionResult> {
  const raw = input.phone.trim();
  const phone = normalizeSouthAfricanMobile(raw);
  const email = raw.includes('@') ? normalizeEmail(raw) : null;

  if (!phone && !email) {
    throw new Error('INVALID_CONTACT');
  }

  const reason = input.reason.trim();
  if (reason.length < 10) {
    throw new Error('REASON_TOO_SHORT');
  }

  const farmer = await prisma.farmer.findFirst({
    where: {
      OR: [...(phone ? [{ phone }] : []), ...(email ? [{ email }] : [])],
    },
    select: { id: true },
  });

  let farmerAnonymized = false;
  if (farmer) {
    await anonymizeFarmerAndData(farmer.id);
    farmerAnonymized = true;
  }

  const row = await prisma.accountDeletionRequest.create({
    data: {
      phone: phone ?? email ?? raw,
      reason,
      farmer_id: farmer?.id ?? null,
      status: farmerAnonymized ? 'completed' : 'pending',
    },
  });

  return {
    requestId: row.id,
    farmerMatched: Boolean(farmer),
    farmerAnonymized,
  };
}
