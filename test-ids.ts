import { PrismaClient } from '@prisma/client'
async function main() {
  const prisma = new PrismaClient()
  const projects = await prisma.project.findMany({
    select: { id: true, title: true, category: { select: { slug: true } } },
    take: 5
  })
  console.log(JSON.stringify(projects, null, 2))
  await prisma.$disconnect()
}
main()