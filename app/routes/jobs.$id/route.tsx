import { useLoaderData, useParams } from '@remix-run/react';
import { getJobs } from '~/data/job.server';

export default function Jobs() {
  const params = useParams();
  const jobs = useLoaderData<typeof loader>();
  const job = jobs.find((job) => job.id === params.id);
  console.log(job);

  return (
    <div className="container mt-10">
      <h1 className="text-4xl text-primary">{job?.title}</h1>
    </div>
  );
}

export async function loader() {
  const jobs = await getJobs();
  return jobs;
}
