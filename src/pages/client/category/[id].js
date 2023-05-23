import { withAuthorize } from '@/shared/hocs/withAuthorize';
import { PageContainer } from '@/shared/components/PageContainer';
import { CategoryPageBanner } from '@/shared/components/CategoryPageBanner';
import { ClientCategorySearchResultSection } from '@/shared/components/PageSections/ClientMarketplace';

export default function ServiceCategory({ label, id }) {
  return (
    <>
      <PageContainer layout="marketplace">
        <CategoryPageBanner title={label} />

        <PageContainer.Marketplace>
          <ClientCategorySearchResultSection id={id} />
        </PageContainer.Marketplace>
      </PageContainer>
    </>
  );
}
// TODO: Check if the category is present on the server
export const getServerSideProps = withAuthorize(async (context) => {
  const { id } = context.params;

  // FOR DEMO ONLY
  try {
    const result = { success: true, label: 'logo design' };
    const { success, label } = result;

    // Return the category label
    const pageProps = { label, success, id };
    return { props: pageProps };
  } catch (error) {
    throw new Error(error.message, 404);
  }
});
