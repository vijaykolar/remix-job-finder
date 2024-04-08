import { LinkType } from './type';

export const navigationLinks: LinkType[] = [
  { name: 'Dashboard', href: '/' },
  { name: 'Job search', href: '/jobs' },
  { name: 'talent', href: '/talent' },
  { name: 'schedule', href: '/schedule' },
  { name: 'events', href: '/calender' },
  { name: 'Components', href: '/components' },
  // { name: 'Reports', href: '/reports' },
] as const;
