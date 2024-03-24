import { json, redirect, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUsers } from '~/data/user.server';
import { getJobs } from '~/data/job.server';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  const jobs = useLoaderData<typeof loader>();
  console.log(jobs);

  if (!jobs) {
    return <p>No jobs</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-5xl text-green-500">Welcome to Remix!!{jobs.length}</h1>
      <div>
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              {job.title} {job.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader() {
  const jobs = await getJobs();
  return jobs;
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   console.log(formData);
//   alert(1);
//   return json({
//     success: true,
//     formData: Object.fromEntries(formData),
//   });
// };
