import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
      data: [
        {
          email: "nick@yahoo.com",
          username: "NicksWheat",
          first_name: "Nick",
          last_name: "Sweet",
          password: "password1234",
        },
        {
          email: "eddy@yahoo.com",
          username: "EdBoy407",
          first_name: "Edward",
          last_name: "Koesic",
          password: "password2345",
        },
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
