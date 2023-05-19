import React, { useState } from 'react';
import { Stepper, Button, Group, Content } from '@mantine/core';
import FormDataProvider from '@/shared/providers/FormDataProvider';
import { PersonalInformationForm } from './PersonalInformationForm';
import { ProfessionalInformationForm } from './ProfessionalInformationForm';
import { ExperienceInformationForm } from './ExperienceInformationForm';
import { ContactInformationForm } from './ContactInformationForm';
import { OnboardingSuccess } from './OnboardingSuccess';
import {
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
} from '@tabler/icons-react';

export function FreelancerForm() {
  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep) => {
    const isOutOfBounds = nextStep > 4 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step) =>
    highestStepVisited >= step && active !== step;

  return (
    <div style={{ margin: '0 auto' }}>
      <FormDataProvider>
        <Stepper
          color="green"
          size="xs"
          active={active}
          onStepClick={setActive}
          breakpoint="md"
        >
          <Stepper.Step
            label="Personal Info"
            completedIcon={<IconNumber1 size="1.1rem" />}
            allowStepSelect={shouldAllowSelectStep(0)}
          >
            <PersonalInformationForm />
          </Stepper.Step>
          <Stepper.Step
            label="Professional Info"
            completedIcon={<IconNumber2 size="1.1rem" />}
            allowStepSelect={shouldAllowSelectStep(1)}
          >
            <ProfessionalInformationForm />
          </Stepper.Step>
          <Stepper.Step
            label="Experience Info"
            completedIcon={<IconNumber3 size="1.1rem" />}
            allowStepSelect={shouldAllowSelectStep(2)}
          >
            <ExperienceInformationForm />
          </Stepper.Step>
          <Stepper.Step
            label="Contact Info"
            completedIcon={<IconNumber4 size="1.1rem" />}
            allowStepSelect={shouldAllowSelectStep(3)}
          >
            <ContactInformationForm />
          </Stepper.Step>
          <Stepper.Step label="Done" allowStepSelect={shouldAllowSelectStep(4)}>
            <OnboardingSuccess />
          </Stepper.Step>

          <Stepper.Completed>
            <Content>
              Completed, click back button to get to the previous step
            </Content>
          </Stepper.Completed>
        </Stepper>
      </FormDataProvider>

      <Group position="center" mt="xl">
        <Button
          variant="light"
          onClick={() => handleStepChange(active - 1)}
          disabled={active === 0}
        >
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </div>
  );
}
