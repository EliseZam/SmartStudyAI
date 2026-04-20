import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  const student = await prisma.student.upsert({
    where: { email: 'demo@smartstudy.ai' },
    update: {},
    create: {
      fullName: 'Demo Student',
      email: 'demo@smartstudy.ai',
      password: hashedPassword,
    },
  });

  await prisma.studyPlan.create({
    data: {
      title: 'Biology Midterm Review',
      goal: 'Review key concepts and complete practice questions',
      deadline: new Date('2026-05-10T23:59:59.000Z'),
      progress: 25,
      studentId: student.id,
    },
  });

  console.log('Seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
