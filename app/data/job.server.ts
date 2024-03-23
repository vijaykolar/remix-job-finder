import { prisma } from './prismaclient.server';

export async function getJobs() {
  // try {
  //   const jobs = await prisma.job.findMany();
  //   if (!jobs) {
  //     return [];
  //   }
  //   return jobs;
  // } catch (error) {
  //   throw new Error(error);
  // }
}

export async function postJob(formData: any) {
  try {
    const job = await prisma.job.create({
      data: {
        title: formData.title,
      },
    });
    return job;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}
