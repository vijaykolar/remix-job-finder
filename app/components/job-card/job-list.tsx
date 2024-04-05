import { useLoaderData, useNavigation } from '@remix-run/react';
import { JobCard } from './job-card';
import { loader as JobLoader } from '~/routes/_index';
import { Fragment } from 'react/jsx-runtime';

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

function JobList({ jobs }: any) {
  // const jobs = useLoaderData<typeof JobLoader>();

  return <Fragment>{jobs?.map((job: any) => <JobCard key={job.id} job={job} />)}</Fragment>;
}

export { JobList };
