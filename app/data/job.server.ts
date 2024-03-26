import { prisma } from './prismaclient.server';

export async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({
      select: {
        title: true,
        company: true,
        id: true,
      },
    });
    return jobs;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}

export async function postJob(formData: any) {
  try {
    const jobs = await prisma.job.create({
      data: {
        title: formData.title,
      } as any,
    });
    return jobs;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}
