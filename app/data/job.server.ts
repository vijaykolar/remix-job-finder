import { prisma } from './prismaclient.server';

async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({});
    return jobs;
  } catch (error) {
    console.log(error);
  }
}

export { getJobs };
