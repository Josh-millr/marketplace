import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { CustomSuspense } from '@/shared/components/CustomSuspense';
import { projectDemo } from '@/shared/constants/projectDemo';
import { PageContainer } from '@/shared/components/PageContainer';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import { DashboardProposalCard } from '@/shared/components/DashboardProposalCard';
import { DashboardGoBackButtonBar } from '@/shared/components/DashboardGoBackButtonBar';

export default function Project() {
  const [project, setProject] = useState(projectDemo);
  const [coverLetter, setCoverLetter] = useState('');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Fetch project information and update the data state....
  }, []);

  return (
    <PageContainer.Marketplace>
      <DashboardGoBackButtonBar />

      <DashboardSectionCardNew contentFullWidth padSection>
        {/* ... Project Details ... */}
      </DashboardSectionCardNew>

      <DashboardSectionCardNew contentFullWidth>
        {/* ... Proposals Received ... */}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}
