import { useState } from "react";
import { Stepper } from "@mantine/core";
import {
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
} from "@tabler/icons-react";

/***
 *
 * TODO: Pass in component for each step
 * TODO: Return the `progressStep` function for traversing the steps
 *
 **/

export function BarStepper() {
  const [active, setActive] = useState(1);

  const progressStep = {
    prev() {
      setActive((current) => (current > 0 ? current - 1 : current));
    },
    next() {
      setActive((current) => (current < 3 ? current + 1 : current));
    },
  };

  return (
    <Stepper active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step
        label="Personal Info"
        completedIcon={<IconNumber1 size="1.1rem" />}
      >
        Step 1 content: Create an account
      </Stepper.Step>

      <Stepper.Step
        label="Professional Info"
        completedIcon={<IconNumber2 size="1.1rem" />}
      >
        Step 2 content: Verify email
      </Stepper.Step>

      <Stepper.Step
        label="Experience Info"
        completedIcon={<IconNumber3 size="1.1rem" />}
      >
        Step 3 content: Get full access
      </Stepper.Step>

      <Stepper.Step
        label="Contact Info"
        completedIcon={<IconNumber4 size="1.1rem" />}
      >
        Step 4 content: Get full access
      </Stepper.Step>

      <Stepper.Completed>
        Completed, click back button to get to previous step
      </Stepper.Completed>
    </Stepper>
  );
}
