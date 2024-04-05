import { BriefcaseIcon, MapIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import { Button } from '../ui/button';

type CardProps = {
  id: number;
  name: string;
  location: string;
  ratings: number;
  openJobs: number;
  logo: string;
};

function FeaturedCompaniesCard({ c }: { c: CardProps }) {
  const { logo, name, location, ratings, openJobs } = c;
  return (
    <Card>
      <CardHeader className="flex gap-2 flex-row">
        <div className="flex-shrink-0 h-8 w-8">
          <img src={logo} alt={name} />
        </div>
        <div>
          <Heading size="base" weight="semibold">
            {name}
          </Heading>
          <span className="flex flex-row items-center gap-0.5">
            <Text weigth="normal" size="xs">
              <StarIcon className="h-4 w-4 text-yellow-500" />
            </Text>
            <Text weigth="normal" size="xs">
              {ratings}k
            </Text>
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1.5">
          <li className="flex gap-2 text-gray-500 text-sm items-center">
            <span>
              <MapIcon className="h-4 w-4" />
            </span>
            <Text className="text-sm">{location}</Text>
          </li>
          <li className="flex gap-2 text-gray-500 text-sm items-center">
            <span>
              <BriefcaseIcon className="h-4 w-4" />
            </span>
            <Text className="text-sm">{openJobs} Job Vacancy</Text>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline" className="w-full">
          See all
        </Button>
      </CardFooter>
    </Card>
  );
}

export { FeaturedCompaniesCard };
