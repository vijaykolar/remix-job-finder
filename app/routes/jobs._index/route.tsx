import { MetaFunction } from '@remix-run/node';
import { useLoaderData, useNavigation } from '@remix-run/react';
import { JobList } from '~/components/job-card';
import { Card, CardContent } from '~/components/ui/card';
import { getJobs } from '~/data/job.server';
import { Header } from './header';
import { BannerInfo } from './banner-info';
import { Label } from '~/components/ui/label';
import { TextField } from '~/components/ui/textfield';
import { BriefcaseIcon, ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Button } from '~/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

export const meta: MetaFunction = () => {
  return [{ title: 'Remix All Jobs' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Jobs() {
  const jobs = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  // if (navigation.state === 'loading') {
  //   return (
  //     <div className="container mt-10">
  //       <div className="gap-4 grid">
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
  return (
    <>
      <section>
        <div className="container mt-10 max-w-6xl mx-auto">
          <Header />
          <BannerInfo />
          <div className="bt-white border border-md rounded-sm mt-4 bg-white">
            <form action="">
              <div className="md:flex md:flex-row">
                <div className="md:flex-1 md:flex md:items-center border-b md:border-b-0 md:border-r py-1 md:px-2">
                  <Label id="search" className="sr-only">
                    search
                  </Label>
                  <TextField
                    iconLeft={<MagnifyingGlassIcon className="size-5 " />}
                    id="search"
                    name="search"
                    className="pl-10 border-none w-full"
                    placeholder="Job Title, Company, or Keywords"
                  />
                </div>
                <div className="md:flex-1 md:flex md:items-center border-b md:border-b-0 md:border-r py-1 md:px-2">
                  <Label id="search" className="sr-only">
                    location
                  </Label>
                  <TextField
                    iconLeft={<MapPinIcon className="size-5 " />}
                    // iconRight={<ChevronDownIcon className="size-5" />}
                    id="location"
                    name="location"
                    className="pl-10 border-none w-full"
                    placeholder="Select Location"
                  />
                  {/* <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-week">This week</SelectItem>
                      <SelectItem value="last-week">Next week</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectContent>
                  </Select> */}
                </div>
                {/* <div className="md:flex-1 md:flex md:items-center border-r py-1 px-2">
                  <Label id="search" className="sr-only">
                    location
                  </Label>
                  <TextField
                    iconLeft={<MapPinIcon className="size-5 " />}
                    iconRight={<ChevronDownIcon className="size-5" />}
                    id="location"
                    name="location"
                    className="pl-10 border-none w-full"
                    placeholder="Select Location"
                  />
                </div> */}
                <div className="md:flex-1 md:flex md:items-center border-b md:border-b-0 md:border-r py-1 md:px-2">
                  <Label id="search" className="sr-only">
                    job-type
                  </Label>
                  <TextField
                    iconLeft={<BriefcaseIcon className="size-5" />}
                    id="job-type"
                    name="job-type"
                    className="pl-10 border-none w-full"
                    placeholder="Job type"
                  />
                </div>
                <div className="py-3 md:py-2 px-4 lg:px-6 md:flex md:items-center">
                  <Button className="w-full">Find jobs</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export async function loader() {
  const jobs = await getJobs();
  return jobs;
}

// _.projects
