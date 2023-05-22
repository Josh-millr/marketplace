import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';

function MyServices() {
  return (
    <DashboardPageHeader
      showButton
      action={() => console.log('New service Added')}
      btnLabel="Add service"
      title="My Services"
      descr={`View all your services that are activey listed on the 
        marketplace, manage your service and add new services`}
    />
  );
}

export default MyServices;
