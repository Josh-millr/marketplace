import { useDispatch } from 'react-redux';

import { MarketplaceLayout } from '@/shared/components/Layout';
import { withAuthorize } from '@/shared/hocs/withAuthorize';
import { generalActions } from '@/state/general/generalReducer';
import { getCategoriesApi } from '@/shared/services/getCategoriesApi';
import { PageContainer } from '@/shared/components/PageContainer';
import { ClientMarketplaceTopServices } from '@/shared/components/PageSections/ClientMarketplace';

/**
 *
 * TODO:
 * - Add the layout for client marketplace
 *
 * */

export default function BuyerHome({ category }) {
  const dispatch = useDispatch();
  dispatch(generalActions.storeCategory(category));

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

BuyerHome.getLayout = function getLayout(page) {
  return <MarketplaceLayout layout="client">{page}</MarketplaceLayout>;
};

export const getServerSideProps = withAuthorize(async () => {
  try {
    const categories = await getCategoriesApi();
    return { props: { category: categories } };
  } catch (error) {
    throw new Error('Internal Server Error', 500);
  }
});
