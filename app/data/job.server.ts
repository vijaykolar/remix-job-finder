import { prisma } from './prismaclient.server';

async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({});
    return jobs;
  } catch (error) {
    console.log(error);
  }
}
async function createJob(formData: any) {
  try {
    const job = await prisma.job.create({
      data: {
        title: 'Node Js Developer',
        description:
          'A Node.js developer is responsible for writing server-side web application logic in JavaScript and/or variants of it, such as CoffeeScript, IcedCoffeeScript',
        experience: '5+',
        location: ['Bangalore', 'remote'],
        skills: ['node', 'mysql/nosql', 'JS', 'aws'],
      } as any,
    });

    return job;
  } catch (error) {
    console.log(error);
  }
}

export { getJobs, createJob };
