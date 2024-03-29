import { JobList } from '~/components/job-card';
import { getJobs } from '~/data/job.server';

export default function Jobs() {
  return (
    <div className="container mt-10">
      <div className="grid gap-4">
        <JobList />
      </div>
    </div>
  );
}

export async function loader() {
  const jobs = await getJobs();
  return jobs;
}

// _.projects
