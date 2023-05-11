import { useDispatch } from 'react-redux';

import { withAuthorize } from '@/shared/hocs/withAuthorize';
import { generalActions } from '@/state/general/generalReducer';
import { getCategories } from '@/shared/services/getCategories';
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

export const getServerSideProps = withAuthorize(async () => {
  try {
    const categories = await getCategories();
    return { props: { category: categories } };
  } catch (error) {
    throw new Error('Internal Server Error', 500);
  }
});
