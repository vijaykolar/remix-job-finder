import { loader as x } from "~/routes/_index";
import { useLoaderData } from "@remix-run/react";

export default function ComponentX() {
  const data = useLoaderData<typeof x>();

  return <div>ComponentX {data.title}</div>;
}
