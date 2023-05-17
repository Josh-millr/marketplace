import { useSelector } from 'react-redux';

import { ROLES } from '@/shared/constants/roles';
import { MainLayout } from './Main/Main';
import { AuthLayout } from './Auth/Auth';
// import { DashboardLayout } from './Dashboard/Dashboard';
import { MarketplaceLayout } from './Marketplace/Marketplace';

// Path groups with similar layout
const AUTH_PATHS = ['/register', '/login'];
// const CLIENT_DASHBOARD_PATH = '/dashboard/client';
const CLIENT_MARKETPLACE_PATHS = ['/client', '/service', '/profile'];
// const FREELANCER_DASHBOARD_PATH = '/dashboard/freelancer';
const FREELANCER_MARKETPLACE_PATHS = ['/freelancer', '/service', '/profile'];

function startsWithAny(path, prefixes) {
  return prefixes.some((prefix) => path.startsWith(prefix));
}

export function Layout({ children, pagePath }) {
  const { user } = useSelector((state) => state.user);
  const userRole = user?.role;

  const isAuthPath = AUTH_PATHS.includes(pagePath);

  const isClientMarketplacePath = userRole === ROLES.CLIENT
  && startsWithAny(pagePath, CLIENT_MARKETPLACE_PATHS);

  const isFreelancerMarketplacePath = userRole === ROLES.FREELANCER
  && startsWithAny(pagePath, FREELANCER_MARKETPLACE_PATHS);

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
    // case isClientDashboardPath:
    //   return <DashboardLayout layout="client">{children}</DashboardLayout>;
    // case isFreelancerDashboardPath:
    //   return <DashboardLayout layout="freelancer">{children}</DashboardLayout>;
    default:
      return <MainLayout>{children}</MainLayout>;
  }
}
