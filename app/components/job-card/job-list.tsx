import { Await, useLoaderData, useNavigation } from '@remix-run/react';
import { JobCard } from './job-card';
import { loader as JobLoader } from '~/routes/_index';
import { Fragment } from 'react/jsx-runtime';
import { Suspense } from 'react';

export type Job = {
  _id: string;
  title: string;
  description: string;
  skills: string[];
  jobType: string;
  location: string;
  salary: string;
  appliedPersons: number;
  logo: string;
  company: string;
};

function JobList() {
  const { jobs } = useLoaderData<typeof JobLoader>() as { jobs: Job[] };
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={jobs}>
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </Await>
      </Suspense> */}
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </Fragment>
  );
}

export { JobList };
