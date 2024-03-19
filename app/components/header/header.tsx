import { Disclosure } from "@headlessui/react";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RightMenu } from "./right-menu";
import { BellIcon } from "@radix-ui/react-icons";

export function Header(): JSX.Element {
  return (
    <header className="border-b border">
      <div className="container">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex justify-between items-center  h-14">
                <div className="-ml-2 mr-2 flex items-center ">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <Logo />
                </div>
                <Navigation />
                <RightMenu />
              </div>
              <div className="-mx-4">
                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 pb-3 pt-2">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
                    >
                      Dashboard
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                    >
                      Team
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                    >
                      Projects
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                    >
                      Calendar
                    </Disclosure.Button>
                  </div>
                  <div className="border-t border-gray-200 pb-3 pt-4">
                    <div className="flex items-center px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          Tom Cook
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          tom@example.com
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1">
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                      >
                        Your Profile
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                      >
                        Settings
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                      >
                        Sign out
                      </Disclosure.Button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}
