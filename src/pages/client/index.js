import { withAuthorize } from '@/shared/hocs/withAuthorize';

import { PageContainer } from '@/shared/components/PageContainer';
import { ClientMarketplaceTopServices } from '@/shared/components/PageSections/ClientMarketplace';

export default function BuyerHome() {
  return (
    <>
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          {/* TODO: Add jumbotron carousel */}

          <ClientMarketplaceTopServices />
        </PageContainer.Marketplace>
      </PageContainer>
    </>
  );
}

export const getServerSideProps = withAuthorize(async () => ({ props: {} }));
