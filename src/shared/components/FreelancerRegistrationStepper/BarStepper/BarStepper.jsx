import { useState } from "react";
import { Stepper, useMantineTheme, Center } from "@mantine/core";
import {
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
} from "@tabler/icons-react";

import { PageContainer } from "@/shared/components/PageContainer";

export function BarStepper({ components }) {
  const [active, setActive] = useState(1);

  const { colors } = useMantineTheme();

  const ComponentOne = components[0];
  const ComponentTwo = components[1];
  const ComponentThree = components[2];
  const ComponentFour = components[3];
  const ComponentFive = components[4];

  const stepControls = {
    prev() {
      setActive((current) => (current > 0 ? current - 1 : current));
    },
    next() {
      setActive((current) => (current < 3 ? current + 1 : current));
    },
  };

  return (
    <PageContainer layout="marketplace">
      <Stepper active={active} onStepClick={setActive} size="sm">
        <Stepper.Step
          label="Personal Info"
          completedIcon={<IconNumber1 size="1.1rem" />}
        >
          <ComponentOne
            goPrevStep={stepControls.prev}
            goNextStep={stepControls.next}
          />
        </Stepper.Step>

        <Stepper.Step
          label="Professional Info"
          completedIcon={<IconNumber2 size="1.1rem" />}
        >
          <ComponentTwo
            goPrevStep={stepControls.prev}
            goNextStep={stepControls.next}
          />
        </Stepper.Step>

        <Stepper.Step
          label="Experience Info"
          completedIcon={<IconNumber3 size="1.1rem" />}
        >
          <ComponentThree
            goPrevStep={stepControls.prev}
            goNextStep={stepControls.next}
          />
        </Stepper.Step>

        <Stepper.Step
          label="Contact Info"
          completedIcon={<IconNumber4 size="1.1rem" />}
        >
          <ComponentFour
            goPrevStep={stepControls.prev}
            goNextStep={stepControls.next}
          />
        </Stepper.Step>

        <Stepper.Step label="Done">
          <ComponentFive />
        </Stepper.Step>

        <Stepper.Completed>
          <Center>
            Completed, click back button to get to the previous step
          </Center>
        </Stepper.Completed>
      </Stepper>
    </PageContainer>
  );
}
