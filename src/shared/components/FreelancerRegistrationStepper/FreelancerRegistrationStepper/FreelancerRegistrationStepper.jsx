import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";

import { PageContainer } from "@/shared/components/PageContainer";

import { BarStepper } from "../BarStepper/BarStepper";
import { ProgressStepper } from "../ProgressStepper/ProgressStepper";

export function FreelancerRegistrationStepper({ components }) {
  const { breakpoints } = useMantineTheme();
  const matchTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);

  return (
    <PageContainer layout="marketplace">
      <PageContainer.Marketplace>
        {matchTablet ? (
          // Steps indicator for tablet > desktop screen
          <BarStepper components={components} />
        ) : (
          // Steps indicator for mobile screen
          <ProgressStepper components={components} />
        )}
      </PageContainer.Marketplace>
    </PageContainer>
  );
}
