import { useLoaderData, useNavigation } from '@remix-run/react';
import { JobCard } from './job-card';
import { loader as JobLoader } from '~/routes/_index';
import { Fragment } from 'react/jsx-runtime';
import { Skeleton } from '../ui/skeleton';
import { Card } from '../ui/card';

// export type Job = {
//   id?: string;
//   title: string;
//   description: string;
//   skills: string[];
//   jobType: string;
//   location: string[];
//   salary?: string;
//   numberOfAplicants: number;
//   logo?: string;
//   company?: {
//     name: string;
//   };
//   experience?: string;
// };

function JobList() {
  const jobs = useLoaderData<typeof JobLoader>();

  const navigation = useNavigation();

  // if (navigation.state !== 'idle') {
  //   return (
  //     <div>
  //       {jobs.map((el) => (
  //         <Card key={el.id} className="p-4 w-full space-y-2 mt-2">
  //           <div className="flex flex-col gap-2">
  //             <div className="flex gap-2">
  //               <Skeleton className="size-8 rounded-full " />
  //               <div className="w-full flex-1">
  //                 <Skeleton className="h-4 w-full rounded-md " />
  //                 <Skeleton className="h-4 mt-2 w-full rounded-md " />
  //               </div>
  //             </div>
  //             <div className="flex flex-col gap-2">
  //               <Skeleton className="h-4 w-full rounded-md " />
  //               <Skeleton className="h-4 w-full rounded-md " />
  //             </div>
  //           </div>
  //         </Card>
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <Fragment>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Fragment>
  );
}

export { JobList };
