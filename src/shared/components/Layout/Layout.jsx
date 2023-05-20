/* eslint-disable operator-linebreak */
import { useSelector } from 'react-redux';

import { ROLES } from '@/shared/constants/roles';
import { MainLayout } from './Main/Main';
import { AuthLayout } from './Auth/Auth';
// import { DashboardLayout } from './Dashboard/Dashboard';
import { MarketplaceLayout } from './Marketplace/Marketplace';
import { FreelancerOnboardingLayout } from './FreelancerOnboarding/FreelancerOnboarding';

// Path groups with similar layout
const AUTH_PATHS = ['/register', '/login'];
// const CLIENT_DASHBOARD_PATH = '/dashboard/client';
const CLIENT_MARKETPLACE_PATHS = ['/client', '/service', '/creator'];
// const FREELANCER_DASHBOARD_PATH = '/dashboard/freelancer';
const FREELANCER_ONBOARDING_PATH = [
  '/freelancer/Onboarding',
  '/onboarding_register',
];
const FREELANCER_MARKETPLACE_PATHS = ['/freelancer', '/service', '/creator'];

function startsWithAny(path, prefixes) {
  return prefixes.some((prefix) => path.startsWith(prefix));
}

export function Layout({ children, pagePath }) {
  const { user } = useSelector((state) => state.user);
  const userRole = user?.role;

  const isAuthPath = AUTH_PATHS.includes(pagePath);

  const isClientMarketplacePath =
    userRole === ROLES.CLIENT &&
    startsWithAny(pagePath, CLIENT_MARKETPLACE_PATHS);

  // userRole === ROLES.FREELANCER &&
  const isFreelancerMarketplacePath = startsWithAny(
    pagePath,
    FREELANCER_MARKETPLACE_PATHS
  );

  // TODO: Add this conditioning when server is active `userRole === ROLES.FREELANCER`
  const isFreelancerOnboardingPath = startsWithAny(
    pagePath,
    FREELANCER_ONBOARDING_PATH
  );

  // const isClientDashboardPath = pagePath.startsWith(CLIENT_DASHBOARD_PATH);
  // const isFreelancerDashboardPath = pagePath.startsWith(
  //   FREELANCER_DASHBOARD_PATH
  // );

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
    // case isClientDashboardPath:
    //   return <DashboardLayout layout="client">{children}</DashboardLayout>;
    // case isFreelancerDashboardPath:
    //   return <DashboardLayout layout="freelancer">{children}</DashboardLayout>;
    default:
      return <MainLayout>{children}</MainLayout>;
  }
}
