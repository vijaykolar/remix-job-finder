import { defer, json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { JobList } from '~/components/job-card';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';
// import { companies } from '~/mock/data.json';
import { jobs as fakejobs } from '~/mock/jobs.json';
export const meta: MetaFunction = () => {
  return [{ title: 'Job Finder App' }, { name: 'description', content: 'Welcome to Job Finder App!' }];
};

export default function Index() {
  return (
    <div className="container mt-5">
      <div className="lg:grid grid-cols-4 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-3 gap-4">
          <JobList />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recommended jobs</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  // const res = await fetch('https://nqpq63-3000.csb.app/jobs');

  // const jobs = await res.json();

  return json(fakejobs);
}
