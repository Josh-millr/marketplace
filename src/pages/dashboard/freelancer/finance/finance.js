import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';

function Finance() {
  return (
    <DashboardPageHeader
      title="Finance"
      // descr={`You can view and respond to your reviews and know what clients
      // are saying about you`}
    />
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Finance;
