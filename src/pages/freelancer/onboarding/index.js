import { useDispatch } from 'react-redux';

// import { withAuthorize } from '@/shared/hocs/withAuthorize';
import { generalActions } from '@/state/general/generalReducer';
// import { getCategoriesApi } from '@/shared/services/getCategoriesApi';
import { PageContainer } from '@/shared/components/PageContainer';
import { OnboardingWelcome } from '@/features/auth/Freelancer/components/OnboardingWelcome';
import { FreelancerOnboardingLayout } from '@/shared/components/Layout';

export default function Onboarding({ category }) {
  const dispatch = useDispatch();
  dispatch(generalActions.storeCategory(category));

  return (
    <>
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          {/* TODO: Add jumbotron carousel */}

          <OnboardingWelcome />
        </PageContainer.Marketplace>
      </PageContainer>
    </>
  );
}

Onboarding.getLayout = function getLayout(page) {
  return <FreelancerOnboardingLayout layout="freelancer">{page}</FreelancerOnboardingLayout>;
};

// export const getServerSideProps = withAuthorize(async () => {
//   try {
//     const categories = await getCategoriesApi();
//     return { props: { category: categories } };
//   } catch (error) {
//     throw new Error('Internal Server Error', 500);
//   }
// });
