import { withAuthorize } from '@/shared/hocs/withAuthorize';

import { PageContainer } from '@/shared/components/PageContainer';
import { ClientMarketplaceTopServices } from '@/shared/components/PageSections/ClientMarketplace';

export default function ClientHome() {
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

export async function getStaticProps() {
  return { props: {} };
}

// export const getServerSideProps = withAuthorize(async () => ({ props: {} }));
