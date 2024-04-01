import { Link } from '@remix-run/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
// import { Job } from './job-list';
import { formatSalary } from '~/lib/format-salary';

function JobCard({ job }: { job: any }) {
  const { id, company, logo, title, description, skills, jobType, experience, numberOfAplicants, location, salary } =
    job;
  return (
    <Card>
      <CardHeader className="flex flex-row space-x-4">
        <div className="size-12 bg-secondary p-1.5 rounded-sm">
          <img
            className="h-full w-full "
            title={company?.name}
            src="data:image/png;base64,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"
          />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
          <div className="flex flex-wrap gap-1">
            {/* <span className="text-xs">* {location.join(', ')}</span> */}
            {/* <Badge size="sm" variant="secondary">
              {jobType}
            </Badge> */}
            {/* {numberOfAplicants > 0 && (
              <Badge size="sm" variant="secondary">
                {numberOfAplicants} applied
              </Badge>
            )} */}
            <Badge size="sm" variant="secondary">
              {experience} years
            </Badge>
            <Badge size="sm" variant="secondary">
              {[...location].join(', ')}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex gap-1">
          <div className="flex flex-wrap gap-1">
            {skills.map((skill: any) => (
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
