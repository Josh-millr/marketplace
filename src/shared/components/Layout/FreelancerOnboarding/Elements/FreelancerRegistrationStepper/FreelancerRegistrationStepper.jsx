import { MediaQuery } from "@mantine/core";

import { BarStepper } from "../BarStepper/BarStepper";
import { ProgressStepper } from "../ProgressStepper/ProgressStepper";

/**
 *
 * TODO: Pass in the steps components to be rendered
 *
 **/

export function FreelancerRegistrationStepper() {
  return (
    <>
      {/* Steps indicator for mobile screen */}
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <BarStepper />
      </MediaQuery>

      {/* Steps indicator for tablet > desktop screen */}
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <ProgressStepper />
      </MediaQuery>
    </>
  );
}
