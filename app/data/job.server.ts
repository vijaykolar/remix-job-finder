import { prisma } from './prismaclient.server';

export async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        location: true,
        skills: true,
        numberOfAplicants: true,
        jobType: true,
        experience: true,
        company: true,
        // description: true,
        // skills: true,
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
