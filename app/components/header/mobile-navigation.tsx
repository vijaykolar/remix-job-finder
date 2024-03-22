import { NavLink } from '@remix-run/react';
import { Disclosure } from '@headlessui/react';
import { navigationLinks } from './navigation-links';
import { LinkType } from './type';
import { cn } from '~/lib/utils';

export function MobileNavigation(): JSX.Element {
  return (
    <ul className="space-y-1 pb-3 pt-2">
      {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
      {navigationLinks.map((link: LinkType) => {
        return (
          <li key={link.name}>
            <Disclosure.Button
              as={NavLink}
              to={link.href}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'block',
                  'items-center',
                  'border-l-4',
                  'text-sm',
                  'font-medium',
                  ' py-2 pl-3 pr-4 text-base font-medium  sm:pl-5 sm:pr-6',
                  {
                    'text-primary  hover:border-primary hover:text-primary border-primary':
                      isActive,
                    'text-gray-500 hover:border-primary hover:text-primary border-transparent':
                      !isActive,
                  }
                )
              }
              //   className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
            >
              {link.name}
            </Disclosure.Button>
          </li>
        );
      })}
    </ul>
  );
}
