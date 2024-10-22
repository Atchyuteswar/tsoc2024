import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    { email: 'alice@prisma.io', name: 'Alice' },
    { email: 'bob@prisma.io', name: 'Bob' },
    { email: 'charlie@prisma.io', name: 'Charlie' },
    { email: 'dave@prisma.io', name: 'Dave' },
    { email: 'eve@prisma.io', name: 'Eve' },
    { email: 'frank@prisma.io', name: 'Frank' },
    { email: 'rohan@tcl.com', name: 'Rohan' },
    { email: 'rebecca@tcl.com', name: 'Rebecca' },
    { email: 'vivek@gmail.com', name: 'Vivek' },
  ];

  const upsertPromises = users.map((user) =>
    prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        name: user.name,
      },
    })
  );

  const result = await Promise.all(upsertPromises);
  console.log(result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
