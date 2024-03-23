import { postJob } from '~/data/job.server';

export default function PostJob() {
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(1);
  }
  return (
    <div>
      <h1>Post Job</h1>
      <p>Form</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export async function action({ request }: { request: Request }) {
  const x = await request.formData();
  const formData = Object.fromEntries(x);
  console.log(formData);
  postJob(formData);
}
