import { Disclosure } from "@headlessui/react";
import { NavLink } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { navigationLinks } from "./navigation-links";
import { LinkType } from "./type";

export function Navigation(): JSX.Element {
  return (
    <Disclosure>
      <div className="flex">
        <ul className="hidden md:flex md:space-x-8">
          {navigationLinks.map((link: LinkType) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }: { isActive: boolean }) =>
                  cn(
                    "inline-flex",
                    "h-14",
                    "items-center",
                    "border-b-2",
                    "text-sm",
                    "font-bold",
                    {
                      "text-primary hover:border-primary hover:text-primary border-primary":
                        isActive,
                      "text-gray-500 hover:border-primary hover:text-primary border-transparent":
                        !isActive,
                    }
                  )
                }
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
