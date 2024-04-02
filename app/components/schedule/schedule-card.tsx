import { Heading } from '../ui/heading';
import { Text } from '../ui/text';

function ScheduleCard() {
  return (
    <div className="flex gap-2 md:grid grid-cols-4  bg-stone-50 p-2">
      <div className="size-12 min-h-12 min-w-12 rounded-md flex flex-col justify-center items-center bg-white">
        <Text as="div" size="base" weigth="semibold" className="text-gray-800">
          28
        </Text>
        <Text as="div" size="xs" className="text-gray-800">
          Tue
        </Text>
      </div>
      <div className="col-span-3 overflow-hidden">
        <Heading
          title="Google: React Js Interview dfdsfdsfsdfdsf"
          as="h3"
          size="sm"
          weight="semibold"
          className="capitalize truncate "
        >
          Google: React Js Interview dfdsfdsfsdfdsf
        </Heading>
        <div className="md:flex flex-row gap-2">
          <Text size="xs">9:00am - 10:00am</Text>
          <Text size="xs">Google meet</Text>
        </div>
      </div>
    </div>
  );
}

export { ScheduleCard };
