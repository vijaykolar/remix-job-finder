import { ActionFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { createJob } from '~/data/job.server';
export default function CreateJob() {
  return (
    <Form method="post">
      <input name="title" type="text" />
      <button type="submit">submit</button>
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const title = data.get('title');
  const res = { title };
  const job = await createJob(res);
  // const c = await createCompany();
  console.log(job);

  // console.log(c);

  return null;
}
