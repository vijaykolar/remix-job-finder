import { json, type MetaFunction } from "@remix-run/node";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const formData = useLoaderData<typeof loader>();
  return (
    <div className="container mt-5">
      <h1 className="text-5xl text-green-500">Welcome to Remix</h1>

      <div className="flex gap-4">
        <Button onClick={() => alert(1)} variant="destructive">
          Delete
        </Button>

        <Button size="sm">Submit</Button>
        <Button size="lg">ghost</Button>
        <Button>Submit ddd</Button>
      </div>

      <div className="flex gap-4">
        <Avatar size="xl">
          <AvatarImage src="https://mighty.tools/mockmind-api/content/human/68.jpg" />
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarImage src="https://mighty.tools/mockmind-api/content/human/68.jpg" />
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export async function loader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return json(data);
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   console.log(formData);
//   alert(1);
//   return json({
//     success: true,
//     formData: Object.fromEntries(formData),
//   });
// };
