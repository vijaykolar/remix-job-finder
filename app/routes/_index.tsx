import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUsers } from '~/data/user.server';
import { getJobs } from '~/data/job.server';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  // const jobs = useLoaderData<typeof loader>();
  // console.log(jobs);

  return (
    <div className="container mt-5">
      <h1 className="text-5xl text-green-500">Welcome to Remix</h1>
    </div>
  );
}

// export async function loader() {
//   // const users = await getUsers();
//   // console.log(users?.data?.jobs);
//   const jobs = getJobs();

//   console.log(jobs);

//   // return users;
//   return jobs;
// }

// export async function action({ request }) {
//   const formData = await request.formData();
//   console.log(formData);
//   alert(1);
//   return json({
//     success: true,
//     formData: Object.fromEntries(formData),
//   });
// };
