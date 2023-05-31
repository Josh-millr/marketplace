import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { BarStepper } from "../BarStepper/BarStepper";
import { ProgressStepper } from "../ProgressStepper/ProgressStepper";

export function FreelancerRegistrationStepper({ components }) {
  const { breakpoints } = useMantineTheme();
  const matchTablet = useMediaQuery(`min-width: ${breakpoints.md}`);

  return (
    <>
      {matchTablet ? (
        // Steps indicator for tablet > desktop screen
        <BarStepper components={components} />
      ) : (
        // Steps indicator for mobile screen
        <ProgressStepper />
      )}
    </>
  );
}
