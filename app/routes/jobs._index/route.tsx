import { useLoaderData, useNavigation } from '@remix-run/react';
import { JobList } from '~/components/job-card';
import { Card, CardContent } from '~/components/ui/card';
import { getJobs } from '~/data/job.server';

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
    <div className="container mt-10">
      <div className="grid gap-4">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}

export async function loader() {
  const jobs = await getJobs();
  return jobs;
}

// _.projects
