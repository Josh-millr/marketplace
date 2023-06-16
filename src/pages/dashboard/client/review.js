import { Comment } from "@/features/comment";
import { commentsDemo } from "@/shared/constants/commentsDemo";
import { PageContainer } from "@/shared/components/PageContainer";
import { DashboardSectionCard } from "@/shared/components/DashboardSectionCard";
import { DashboardPageHeader } from "@/shared/components/DashboardPageHeader";

function Review() {
  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader title="Review" />

      <DashboardSectionCard contentFullWidth>
        <Comment comments={commentsDemo} />
      </DashboardSectionCard>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Review;
