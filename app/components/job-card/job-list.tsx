import {  useLoaderData, useNavigation } from '@remix-run/react';
import { JobCard } from './job-card';
import { loader as JobLoader } from '~/routes/_index';
import { Fragment } from 'react/jsx-runtime';

export type Job = {
  id?: string;
  title: string;
  description: string;
  skills: string[];
  jobType: string;
  location: string[];
  salary?: string;
  numberOfAplicants: number;
  logo?: string;
  company?: {
    name: string;
  };
  experience?: string;
};

function JobList() {
  const jobs = useLoaderData<typeof JobLoader>() as Job[];
  console.log(jobs);

  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Fragment>
  );
}

export { JobList };
