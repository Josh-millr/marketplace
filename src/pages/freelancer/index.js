import { useDispatch } from 'react-redux';

// import { withAuthorize } from '@/shared/hocs/withAuthorize';
import { generalActions } from '@/state/general/generalReducer';
// import { getCategoriesApi } from '@/shared/services/getCategoriesApi';
import { PageContainer } from '@/shared/components/PageContainer';
import { ClientMarketplaceTopServices } from '@/shared/components/PageSections/ClientMarketplace';
import { MarketplaceLayout } from '@/shared/components/Layout/Marketplace/Marketplace';

/**
 *
 * TODO:
 * - Add the layout for freelancers marketplace
 *
 * */

export default function FreelancerHome({ category }) {
  const dispatch = useDispatch();
  dispatch(generalActions.storeCategory(category));

  return (
    <>
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          {/* TODO: Add jumbotron carousel */}

          <ClientMarketplaceTopServices/>
        </PageContainer.Marketplace>
      </PageContainer>
    </>
  );
}

FreelancerHome.getLayout = function getLayout(page) {
  return <MarketplaceLayout layout="freelancer">{page}</MarketplaceLayout>;
};

// export const getServerSideProps = withAuthorize(async () => {
//   try {
//     const categories = await getCategoriesApi();
//     return { props: { category: categories } };
//   } catch (error) {
//     throw new Error('Internal Server Error', 500);
//   }
// });
