/* eslint-disable operator-linebreak */
import { useSelector } from 'react-redux';

import { ROLES } from '@/shared/constants/roles';

import { MainLayout } from './Main/Main';
import { AuthLayout } from './Auth/Auth';
import { DashboardLayout } from './Dashboard/Dashboard';
import { MarketplaceLayout } from './Marketplace/Marketplace';
import { FreelancerOnboardingLayout } from './FreelancerOnboarding/FreelancerOnboarding';

// Grouping of Paths that share similar layouts
const AUTH_PATHS = ['/register', '/login'];
const CLIENT_DASHBOARD_PATH = '/dashboard/client';
const CLIENT_MARKETPLACE_PATHS = ['/client', '/service', '/creator'];
const FREELANCER_DASHBOARD_PATH = '/dashboard/freelancer';
const FREELANCER_MARKETPLACE_PATHS = ['/freelancer', '/service', '/creator'];
const FREELANCER_ONBOARDING_PATH = [
  '/freelancer/onboarding',
  '/onboarding_register',
];

function startsWithAny(path, prefixes) {
  return prefixes.some((prefix) => path.startsWith(prefix));
}

export function Layout({ children, pagePath }) {
  const { user } = useSelector((state) => state.user);
  const userRole = user?.role;

  const isClientLoggedIn = userRole === ROLES.CLIENT;
  const isFreelancerLoggedIn = userRole === ROLES.FREELANCER;

  const isAuthPath = AUTH_PATHS.includes(pagePath);

  const isClientMarketplacePath =
    isClientLoggedIn && startsWithAny(pagePath, CLIENT_MARKETPLACE_PATHS);

  const isClientDashboardPath =
    isClientLoggedIn && pagePath.startsWith(CLIENT_DASHBOARD_PATH);

  // TODO: Include `isFreelancerLoggedIn` condition after creating freelancer signup
  const isFreelancerMarketplacePath = startsWithAny(
    pagePath,
    FREELANCER_MARKETPLACE_PATHS
  );

  // TODO: Include `isFreelancerLoggedIn` condition after creating freelancer signup
  const isFreelancerDashboardPath = pagePath.startsWith(
    FREELANCER_DASHBOARD_PATH
  );

  const isFreelancerOnboardingPath =
    isClientLoggedIn && startsWithAny(pagePath, FREELANCER_ONBOARDING_PATH);

  switch (true) {
    case isAuthPath:
      return <AuthLayout>{children}</AuthLayout>;
    case isFreelancerMarketplacePath:
      return (
        <MarketplaceLayout layout="freelancer">{children}</MarketplaceLayout>
      );
    case isClientMarketplacePath:
      return <MarketplaceLayout layout="client">{children}</MarketplaceLayout>;
    case isFreelancerOnboardingPath:
      return (
        <FreelancerOnboardingLayout>{children}</FreelancerOnboardingLayout>
      );
    case isClientDashboardPath:
      return <DashboardLayout layout="client">{children}</DashboardLayout>;
    case isFreelancerDashboardPath:
      return <DashboardLayout layout="freelancer">{children}</DashboardLayout>;
    default:
      return <MainLayout>{children}</MainLayout>;
  }
}
