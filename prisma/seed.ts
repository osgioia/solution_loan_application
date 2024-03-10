import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@admin.com',
        password: '$argon2i$v=19$m=4096,t=3,p=1$yOBubjsn/U3oKdrBlZXciw$qyEXWpwZSsKGCI5F3QNoj0PvpCmnPuMHnlYvuvvaY6E', //admin
        role: 'ADMIN'
      }
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
