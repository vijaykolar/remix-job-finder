import { Link } from '@remix-run/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Job } from './job-list';
import { formatSalary } from '~/lib/format-salary';

function JobCard({ job }: { job: Job }) {
  const { _id, company, logo, title, description, skills, jobType, appliedCount, location, salary } = job;
  console.log(salary[0]);
  return (
    <Card>
      <CardHeader className="flex flex-row space-x-4">
        <div className="size-12 bg-secondary p-1.5 rounded-sm">
          <img className="h-full w-full " src={logo} alt="" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
          <div className="flex flex-wrap gap-1">
            <Badge size="sm" variant="secondary">
              {jobType}
            </Badge>
            {appliedCount > 0 && (
              <Badge size="sm" variant="secondary">
                {appliedCount} applied
              </Badge>
            )}
            <Badge size="sm" variant="secondary">
              {location}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex gap-1">
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="lowercase">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <span>${formatSalary(salary)}/year</span>
        <Link className="bg-primary text-sm text-white rounded-md px-3 py-1" to={`/jobs/${job._id}`}>
          Apply now
        </Link>
      </CardFooter>
    </Card>
  );
}

export { JobCard };
