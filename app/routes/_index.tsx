import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { JobList } from '~/components/job-card';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';
import { getJobs } from '~/data/job.server';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="container mt-10">
      {/* <h1 className="text-5xl text-green-500">Welcome to Remix!!</h1> */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <JobList />
          </div>
          <div className="flex justify-center mt-4">
            <Link className="border rounded-md px-2 p-1 inline-flex items-center text-primary text-xs" to="/jobs">
              More jobs
            </Link>
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
  return jobs?.slice(0, 4);
}
