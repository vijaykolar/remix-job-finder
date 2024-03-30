import { MetaFunction } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { getJobs } from '~/data/job.server';

export const meta: MetaFunction = ({ data }: any) => {
  return [{ title: data.title }, { name: 'description', content: data.description || '' }];
};

export default function Jobs() {
  const job = useLoaderData<typeof loader>();

  return (
    <div className="container mt-10">
      <h1 className="text-4xl text-primary">{job?.title}</h1>
    </div>
  );
}

export async function loader(data: any) {
  console.log(data.params.id);
  const jobs = (await getJobs()) as any;
  const job = jobs.find((job: any) => job.id === data.params.id);
  // console.log(job);

  return job;
}
