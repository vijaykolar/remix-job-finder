import { Link } from '@remix-run/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Job } from './job-list';
import { formatSalary } from '~/lib/format-salary';

function JobCard({ job }: { job: Job }) {
  const { id, company, logo, title, description, skills, jobType, experience, numberOfAplicants, location, salary } =
    job;
  return (
    <Card>
      <CardHeader className="flex flex-row space-x-4">
        <div className="size-12 bg-secondary p-1.5 rounded-sm">
          <img className="h-full w-full " title={company?.name} src={'3'} />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
          <div className="flex flex-wrap gap-1">
            <span className="text-xs">* {company?.name}</span>
            <span className="text-xs">* {jobType}</span>
            <span className="text-xs">* {location.join(', ')}</span>
            {/* <Badge size="sm" variant="secondary">
              {jobType}
            </Badge> */}
            {/* {numberOfAplicants > 0 && (
              <Badge size="sm" variant="secondary">
                {numberOfAplicants} applied
              </Badge>
            )} */}
            {/* <Badge size="sm" variant="secondary">
              {experience} years
            </Badge>

            <Badge size="sm" variant="secondary">
              {[...location].join(', ')}
            </Badge> */}
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
        {/* <span>${formatSalary(salary)}/year</span> */}
        <span>$100-120k/year</span>
        <Link className="bg-primary text-sm text-white rounded-md px-3 py-1" to={`/jobs/${job.id}`}>
          Apply now
        </Link>
      </CardFooter>
    </Card>
  );
}

export { JobCard };
