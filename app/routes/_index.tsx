import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { JobList } from '~/components/job-card';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { RecommendedJobList } from '~/components/recommended-card/RecommendedJobList';
import { getJobs } from '~/data/job.server';
import { ScheduleList } from '~/components/schedule';
import { DropdownMenu } from '~/components/ui/dropdown';
import { Button } from '~/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="container mt-10">
      {/* <h1 className="text-5xl text-green-500">Welcome to Remix!!</h1> */}
      <div className="md:grid md:grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid md:grid-cols-2 gap-4">
            <JobList />
          </div>
          <div className="hidden md:flex justify-center mt-4">
            <Link className="border rounded-md px-2 p-1 inline-flex items-center text-primary text-xs" to="/jobs">
              More jobs
            </Link>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:flex md:flex-col gap-4">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="font-semibold text-base capitalize">Recommnded jobs</CardTitle>
              <Link className="text-xs capitalize hover:underline text-primary" to="/jobs">
                see all
              </Link>
            </CardHeader>
            <CardContent className="space-y-2">
              <RecommendedJobList />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardTitle className="font-semibold text-base capitalize">Schedule </CardTitle>
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="1-week">This week</SelectItem>
                      <SelectItem value="last-week">Next week</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScheduleList />
              <div className="mt-3">
                <Button className="w-full" variant="outline">
                  See all schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const jobs = await getJobs();
  return jobs;
  return null;
}
