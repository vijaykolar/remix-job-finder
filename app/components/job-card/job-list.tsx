import { Await, useLoaderData, useNavigation } from '@remix-run/react';
import { JobCard } from './job-card';
import { loader as JobLoader, loader } from '~/routes/_index';
import { Fragment } from 'react/jsx-runtime';
import { Suspense } from 'react';

export type Job = {
  _id?: string;
  title: string;
  description: string;
  skills: string[];
  jobType: string;
  location: string;
  salary: string;
  appliedCount: number;
  logo: string;
  company: string;
};

function JobList() {
  const fakejobs = useLoaderData<typeof loader>() as [];
  const navigation = useNavigation();
  console.log(fakejobs);

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
      {fakejobs.map((job) => (
        <JobCard key={job} job={job} />
      ))}
    </Fragment>
  );
}

export { JobList };
