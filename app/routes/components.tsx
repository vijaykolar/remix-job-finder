import { FormEvent } from "react";
import { json, type MetaFunction } from "@remix-run/node";
import {
  UserIcon,
  EnvelopeIcon,
  ChevronRightIcon,
  LockClosedIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar/avatar";
import { Badge } from "~/components/ui/badge/badge";
import { Button } from "~/components/ui/button/button";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarItem,
  MenubarSeparator,
} from "~/components/ui/menubar/menubar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown/dropdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card/card";
import { TextField } from "~/components/ui/textfield/textfield";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "~/components/ui/dialog";
import { Skeleton } from "~/components/ui/skeleton";
import { Label } from "~/components/ui/label";
import { toast } from "react-hot-toast";

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
      <h1 className="text-5xl text-primary mb-5">Welcome to Remix</h1>
      <div className="my-5 w-[300px]">
        <div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 min-w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2 flex gap-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4  mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              Open Share modal
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md top-[30%]">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                {/* <Label htmlFor="link" className="sr-only">
                  Link
                </Label> */}
                <TextField
                  id="link"
                  defaultValue="https://heroicons.com/"
                  readOnly
                />
              </div>
              <Button type="submit" className="px-3">
                <span className="sr-only">Copy</span>
                <ClipboardIcon className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-1/2 flex gap-4 items-center">
        <Label htmlFor="email">Email</Label>
        <TextField
          id="email"
          iconLeft={<UserIcon className="h-5 w-5" />}
          iconRight={<ChevronRightIcon className="h-5 w-5" />}
          className="px-10"
          onChange={() => {
            console.log(1);
          }}
        />
        <TextField
          type="email"
          iconLeft={<EnvelopeIcon className="h-5 w-5" />}
          className="pl-10"
          onChange={(
            event: FormEvent<HTMLInputElement>
          ): FormEvent<HTMLInputElement> | void => {
            // Your logic here

            console.log(event.currentTarget.value);
          }}
        />
        <TextField
          type="password"
          iconLeft={<LockClosedIcon className="h-5 w-5" />}
          className="pl-10"
          onChange={(
            event: FormEvent<HTMLInputElement>
          ): FormEvent<HTMLInputElement> | void => {
            // Your logic here
            console.log(event.currentTarget.value);
          }}
        />
        <Button className="h-9" type="reset">
          Submit
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        <Card>
          <CardHeader>
            <CardTitle size="2xl">Heading/Title</CardTitle>
          </CardHeader>
          <CardContent className="borde">
            <CardDescription>
              Here at Microsoft, we are a passionate, fun-loving, growing team.
              We are looking for passionate programmers who want to solve
              technical challenges and learn and incorporate new technologies
              into their skillset to join our team and grow with us.
            </CardDescription>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Heading/Title</CardTitle>
          </CardHeader>
          <CardContent className="borde">
            <CardDescription>
              Here at Microsoft, we are a passionate, fun-loving, growing team.
              We are looking for passionate programmers who want to solve
              technical challenges and learn and incorporate new technologies
              into their skillset to join our team and grow with us.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-end gap-3">
            <Button variant="destructive">Delete</Button>
            <Button>Apply</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Heading/Title</CardTitle>
          </CardHeader>
          <CardContent className="borde">
            <CardDescription>
              Here at Microsoft, we are a passionate, fun-loving, growing team.
              We are looking for passionate programmers who want to solve
              technical challenges and learn and incorporate new technologies
              into their skillset to join our team and grow with us.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 mt-5">
        <Button onClick={() => alert(1)} variant="destructive">
          Delete
        </Button>

        <Button
          className="bg-green-600 hover:bg-green-600/90"
          onClick={() => toast.success("Success!")}
          size="sm"
        >
          Show success toast
        </Button>
        <Button
          variant="destructive"
          onClick={() => toast.error("Failed!")}
          size="sm"
        >
          Show error toast
        </Button>
        <Button size="lg">Default</Button>
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">secondary </Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="destructive" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
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
      <div className="mt-5">
        <Badge>chip primary</Badge>
        <Badge variant="secondary" size="lg">
          chip secondary
        </Badge>
        <Badge variant="outline">chip outline</Badge>
        <Badge variant="desctructive"> chip desctructive</Badge>
      </div>
      <div className="mt-5">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes1</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="mt-5 text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
