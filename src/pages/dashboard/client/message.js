import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';

function Message() {
  return (
    <DashboardPageHeader
      title="Messages"
      descr={`Start a conversation, view all you messages and manage you 
        message inbox`}
    />
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Message;
