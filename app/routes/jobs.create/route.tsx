import { ActionFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { createCompany } from '~/data/company.server';
import { createJob } from '~/data/job.server';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '~/components/ui/textfield';
import { Heading } from '~/components/ui/heading';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue, SelectLabel } from '~/components/ui/select';

export default function CreateJob() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  return (
    <div className="container">
      <div className="max-w-xs mx-auto bg-white shadow-sm p-4 mt-4">
        <Heading weight="semibold" className="mb-3">
          Post a job
        </Heading>
        <Form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div>
              <TextField size="sm" placeholder="Name" {...register('title', { required: true })} />
              {errors.title && (
                <Text as="span" className="text-red-500 text-xs">
                  This field is required
                </Text>
              )}
            </div>

            <div>
              <TextField
                size="sm"
                placeholder="Email"
                {...register('email', {
                  required: 'required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                })}
              />
              {errors.email && (
                <Text as="span" className="text-red-500 text-xs">
                  Enter valid email
                </Text>
              )}
            </div>
            <div>
              <Select
                {...register('location', { required: true })}
                name="location"
                onValueChange={(e) => console.log(e)}
                // value="1"
              >
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select a fruit…" />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectLabel>Location</SelectLabel> */}
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">1</SelectItem>
                  <SelectItem value="3">1</SelectItem>
                </SelectContent>
              </Select>
              {/* {errors.location && (
                <Text as="span" className="text-red-500 text-xs">
                  ss
                </Text>
              )} */}
            </div>
            <Button className="w-full" variant="default" type="submit">
              submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

// export async function action({ request }: ActionFunctionArgs) {
//   const data = await request.formData();
//   const title = data.get('title');
//   const res = { title };
//   const job = await createJob(res);
//   // const c = await createCompany();
//   console.log(job);

//   // console.log(c);

//   return null;
// }
