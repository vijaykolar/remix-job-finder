import { ReactNode } from 'react';

export function Logo(): ReactNode {
  return (
    <div className="flex flex-shrink-0 items-center h-10 w-10">
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
    </div>
  );
}
