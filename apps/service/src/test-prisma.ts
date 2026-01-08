import { PrismaClient } from '../src/generated/prisma'
const prisma = new PrismaClient();

async function main() {
  // Teste rápido: lista todos os usuários (ou cria um se não tiver)
  const users = await prisma.user.findMany();
  console.log('Usuários:', users);

  // Opcional: criar um usuário de teste
  const newUser = await prisma.user.create({
    data: {
      name: 'Mago dos Mares',
      email: `mago${Date.now()}@test.com`,
    },
  });
  console.log('Usuário criado:', newUser);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
