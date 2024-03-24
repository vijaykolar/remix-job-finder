import { json, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { TextField } from '~/components/ui/textfield';
import { postJob } from '~/data/job.server';

export default function PostJob() {
  function handleSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <div className="container mt-5">
      <Form method="post" className="w-1/2  mx-auto flex flex-col gap-4">
        <label htmlFor="title">Title</label>
        <TextField id="title" onChange={(e) => console.log(e.target.value)} type="text" name="title" required />
        <label htmlFor="description">description</label>
        <TextField
          id="description"
          type="text"
          name="description"
          required
          onChange={(e) => console.log(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export async function action({ request }: { request: Request }) {
  const x = await request.formData();
  const formData = Object.fromEntries(x);
  console.log(request);
  await postJob(formData);
  // console.log(request.body);

  return json({ success: true, message: 'Done' }, { status: 201 });
}
