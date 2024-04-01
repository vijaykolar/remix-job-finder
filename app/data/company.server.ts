import { prisma } from './prismaclient.server';

async function getCompany() {
  const companies = await prisma.company.findMany({});
  return companies;
}

async function createCompany() {
  try {
    const company = await prisma.company.create({
      data: {
        name: 'HCS',
      },
    });
    return company;
  } catch (error) {
    console.log(error);
  }
}

export { getCompany, createCompany };
