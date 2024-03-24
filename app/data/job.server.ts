import { json } from '@remix-run/node';
import { prisma } from './prismaclient.server';

export async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({});

    return json(jobs);
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
        description: formData.description,
      },
    });
    return jobs;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}
