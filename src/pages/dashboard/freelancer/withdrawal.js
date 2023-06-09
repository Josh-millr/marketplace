import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';

function MyServices() {
  return (
    <DashboardPageHeader
      showButton
      action={() => console.log('withdraw funds')}
      btnLabel="Withdraw"
      title="Withdrawal"
      descr={`You can view and respond to your reviews and know what clients 
        are saying about you`}
    />
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default MyServices;
