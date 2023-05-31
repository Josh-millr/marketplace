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

export function BarStepper({ components }) {
  const [active, setActive] = useState(1);

  const StepComponentOne = components[0];
  const StepComponentTwo = components[1];
  const StepComponentThree = components[2];
  const StepComponentFour = components[3];
  const StepComponentFive = components[4];

  const stepControls = {
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
        <StepComponentOne
          goPrevStep={stepControls.prev}
          goNextStep={stepControls.next}
        />
      </Stepper.Step>

      <Stepper.Step
        label="Professional Info"
        completedIcon={<IconNumber2 size="1.1rem" />}
      >
        <StepComponentTwo
          goPrevStep={stepControls.prev}
          goNextStep={stepControls.next}
        />
      </Stepper.Step>

      <Stepper.Step
        label="Experience Info"
        completedIcon={<IconNumber3 size="1.1rem" />}
      >
        <StepComponentThree
          goPrevStep={stepControls.prev}
          goNextStep={stepControls.next}
        />
      </Stepper.Step>

      <Stepper.Step
        label="Contact Info"
        completedIcon={<IconNumber4 size="1.1rem" />}
      >
        <StepComponentFour
          goPrevStep={stepControls.prev}
          goNextStep={stepControls.next}
        />
      </Stepper.Step>

      <Stepper.Completed>
        <StepComponentFive />
      </Stepper.Completed>
    </Stepper>
  );
}
