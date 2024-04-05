import { prisma } from './prismaclient.server';

async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({});
    return jobs;
  } catch (error) {
    console.log(error);
  }
  return null;
}
async function createJob(formData: any) {
  try {
    const job = await prisma.job.create({
      data: {
        title: 'Front end developer',
        description:
          'Here at JOBFINDER, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.',
        experience: '15+',
        location: ['Bangalore', 'remote'],
        skills: ['react', 'html/css', 'JS', 'aws'],
      } as any,
    });

    return job;
  } catch (error) {
    console.log(error);
  }
}

export { getJobs, createJob };
