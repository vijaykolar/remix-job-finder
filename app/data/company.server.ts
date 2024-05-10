import { prisma } from './prismaclient.server';

type Company = {
  id: string;
  name: string;
  userId: string;
  description: string;
  isActivelyHiring: boolean;
  rating: number;
  companySize: number;
  location: string[];
  website: string;
  founded: string;
};
async function getCompany() {
  const companies: Company[] = (await prisma.company.findMany({})) as Company[];
  return companies;
}

async function createCompany() {
  try {
    const company: Company = (await prisma.company.create({
      data: {
        name: 'HCS',
      },
    })) as Company;
    return company;
  } catch (error) {
    console.log(error);
  }
}

export { getCompany, createCompany };
