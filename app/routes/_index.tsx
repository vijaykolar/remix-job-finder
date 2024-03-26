import { json, redirect, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUsers } from '~/data/user.server';
import { getJobs } from '~/data/job.server';
import { getCompany } from '~/data/company.server';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  const { jobs, companies } = useLoaderData<typeof loader>();
  // console.log(jobs);

  return (
    <div className="container mt-5">
      <h1 className="text-5xl text-green-500">Welcome to Remix!!{jobs?.length || 0 + companies?.length || 0}</h1>
      <div>
        <ul>
          {jobs?.map((job) => (
            <li key={job.id}>
              {job.title}
              <div>{job.company.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader() {
  const jobs = await getJobs();
  const companies = await getCompany();
  console.log(jobs);
  console.log(companies);
  return json({ jobs, companies });
}

  // const jobs = await res.json();
