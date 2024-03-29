import { json, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
// import { postJob } from '~/data/job.server';

export default function PostJob() {
  function handleSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Post Job</h1>
      <p>Form</p>
      <Form method="post">
        <label htmlFor="title">Title</label>
        <input onChange={(e) => console.log(e.target.value)} type="text" name="title" required />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

// export async function action({ request }: { request: Request }) {
//   console.log(11);
//   const x = await request.formData();
//   console.log(x);
//   const formData = Object.fromEntries(x);
//   console.log(formData);
//   await postJob(formData);
//   return redirect('/');
// }
