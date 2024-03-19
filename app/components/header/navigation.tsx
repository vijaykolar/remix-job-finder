import { Disclosure } from "@headlessui/react";
import { NavLink } from "@remix-run/react";

type LinkType = {
  name: string;
  href: string;
};

const navigationLinks: LinkType[] = [
  { name: "Dashboard", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "Calendar", href: "/calender" },
  { name: "Reports", href: "/reports" },
];

export function Navigation() {
  return (
    <Disclosure>
      <div className="flex">
        <ul className="hidden md:flex md:space-x-8">
          {navigationLinks.map((link: LinkType) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex h-14 items-center border-b-2  px-1 pt-1 text-sm font-medium text-primary hover:border-primary hover:text-primary border-primary "
                    : "inline-flex h-14 items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary hover:text-primary"
                }
                // className=""
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </Disclosure>
  );
}
