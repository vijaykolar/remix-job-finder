import { type MetaFunction } from '@remix-run/node';
import { Link, useLoaderData, useNavigation } from '@remix-run/react';
import { JobList } from '~/components/job-card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { RecommendedJobList } from '~/components/recommended-card/recommended-job-list';
import { getJobs } from '~/data/job.server';
import { ScheduleList } from '~/components/schedule';
import { Button } from '~/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Heading } from '~/components/ui/heading';
import { FeaturedCompaniesList } from '~/components/featured-companies';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  const navigation = useNavigation();

  // if (navigation.state === 'loading') {
  //   return (
  //     <div className="container mt-10">
  //       <div className="gap-4 grid grid-cols-3">
  //         {[1, 2, 3, 4, 5, 6].map((el) => (
  //           <Card key={el}>
  //             <CardContent className="p-4 flex">
  //               <div className="flex-shrink-0">
  //                 <span className="size-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
  //               </div>

  //               <div className="ms-4 mt-2 w-full">
  //                 <p className="h-4 bg-gray-200 rounded-full dark:bg-gray-700" style={{ width: '40%' }}></p>

  //                 <ul className="mt-5 space-y-3">
  //                   <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
  //                   <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
  //                   <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
  //                   <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
  //                 </ul>
  //               </div>
  //             </CardContent>
  //           </Card>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  const jobs = useLoaderData<typeof loader>();
  return (
    <div className="container mt-10">
      {/* <h1 className="text-5xl text-green-500">Welcome to Remix!!</h1> */}
      <div className="md:grid md:grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid md:grid-cols-2 gap-4">
            <JobList jobs={jobs?.slice(0, 4)} />
          </div>
          <div>
            <Heading size="lg" className="mt-8 mb-4" weight="semibold">
              Featured Companies
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeaturedCompaniesList />
            </div>
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
}
