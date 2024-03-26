import { prisma } from './prismaclient.server';

export async function getCompany() {
  const companies = await prisma.company.findMany({});
  return companies;
}
