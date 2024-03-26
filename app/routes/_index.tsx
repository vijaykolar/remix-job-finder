import { json, redirect, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUsers } from '~/data/user.server';
import { getJobs } from '~/data/job.server';
import { JobList } from '~/components/job-card';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  const jobs = useLoaderData<typeof loader>();
  console.log(jobs);

  if (!jobs.length) {
    return <div>no jobs found...</div>;
  }
  return (
    <div className="container mt-5">
      <h1 className="text-5xl text-green-500">Welcome to Remix!!</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <JobList />
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recommnded jobs</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const jobs = await getJobs();
  return json(jobs);
}
