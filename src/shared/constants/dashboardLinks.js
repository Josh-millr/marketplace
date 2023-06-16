import {
  Mail,
  Notes,
  Coins,
  ViewGrid,
  PageEdit,
  MessageText,
  MultiplePages,
  LargeSuitcase,
  ClipboardCheck,
  DatabaseScript,
} from 'iconoir-react';

export const freelancerDashboardLinks = [
  {
    title: 'Dashboard',
    icon: ViewGrid,
    link: '/dashboard/freelancer',
  },
  {
    title: 'My Services',
    icon: LargeSuitcase,
    link: '/dashboard/freelancer/services',
  },
  {
    title: 'My Proposals',
    icon: Notes,
    link: '/dashboard/freelancer/proposals',
  },
  {
    title: 'Messages',
    icon: Mail,
    link: '/dashboard/freelancer/message',
  },
  {
    title: 'Reviews',
    icon: ClipboardCheck,
    link: '/dashboard/freelancer/review',
  },
  {
    title: 'Withdrawal',
    icon: Coins,
    link: '/dashboard/freelancer/withdrawal',
  },
  {
    title: 'Finance',
    icon: Notes,
    link: '/dashboard/freelancer/finance',
  },
  {
    title: 'Contracts',
    icon: Notes,
    link: '/dashboard/freelancer/contracts',
  },
  {
    title: 'Manage Jobs',
    icon: Notes,
    link: '/dashboard/freelancer/manage',
  },
  {
    title: 'My Profile',
    icon: Notes,
    link: '/dashboard/freelancer/profile',
  },
];

export const clientDashboardLinks = [
  {
    title: 'Dashboard',
    icon: ViewGrid,
    link: '/dashboard/client',
  },
  {
    title: 'My Projects',
    icon: MultiplePages,
    link: '/dashboard/client/projects',
  },
  {
    title: 'Messages',
    icon: Mail,
    link: '/dashboard/client/message',
  },
  {
    title: 'Proposals',
    icon: PageEdit,
    link: '/dashboard/client/proposals',
  },
  {
    title: 'Payment',
    icon: Coins,
    link: '/dashboard/client/payment',
  },
  {
    title: 'Contracts',
    icon: DatabaseScript,
    link: '/dashboard/client/contracts',
  },
  {
    title: 'Reviews',
    icon: MessageText,
    link: '/dashboard/client/review',
  },
  {
    title: 'My Workspace',
    icon: LargeSuitcase,
    link: '/dashboard/client/workspace',
  },
];
