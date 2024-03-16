import { json, type MetaFunction } from "@remix-run/node";
import ComponentX from "~/components";
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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-5xl text-green-500">Welcome to Remix</h1>
      <ComponentX />
      <Button variant="destructive">Delete</Button>

      <Button size="sm">Submit</Button>
      <Button size="sm" variant="ghost">
        ghost
      </Button>
      <Button variant="secondary" size="sm">
        Submit
      </Button>
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
