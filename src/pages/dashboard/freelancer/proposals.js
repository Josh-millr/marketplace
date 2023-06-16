import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';

function MyProposals() {
  return (
    <DashboardPageHeader
      title="My Proposals"
      descr={`All the proposals you send to client get displayed here, view 
        and manage all your proposals`}
    />
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default MyProposals;
