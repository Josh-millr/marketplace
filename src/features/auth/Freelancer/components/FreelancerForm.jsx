import { useState } from "react";
import { Stepper, Center } from "@mantine/core";
import {
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
} from "@tabler/icons-react";

import FormDataProvider from "@/shared/providers/FormDataProvider";
import { PageContainer } from "@/shared/components/PageContainer";

import { OnboardingSuccess } from "./OnboardingSuccess";
import { ContactInformationForm } from "./ContactInformationForm";
import { PersonalInformationForm } from "./PersonalInformationForm";
import { ExperienceInformationForm } from "./ExperienceInformationForm";
import { ProfessionalInformationForm } from "./ProfessionalInformationForm";

export function FreelancerForm() {
  const [active, setActive] = useState(0);

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
      <PageContainer.Marketplace>
        <FormDataProvider>
          <Stepper active={active} onStepClick={setActive} size="sm">
            <Stepper.Step
              label="Personal Info"
              completedIcon={<IconNumber1 size="1.1rem" />}
            >
              <PersonalInformationForm goNextStep={stepControls.next} />
            </Stepper.Step>

            <Stepper.Step
              label="Professional Info"
              completedIcon={<IconNumber2 size="1.1rem" />}
            >
              <ProfessionalInformationForm
                goPrevStep={stepControls.prev}
                goNextStep={stepControls.next}
              />
            </Stepper.Step>

            <Stepper.Step
              label="Experience Info"
              completedIcon={<IconNumber3 size="1.1rem" />}
            >
              <ExperienceInformationForm
                goPrevStep={stepControls.prev}
                goNextStep={stepControls.next}
              />
            </Stepper.Step>

            <Stepper.Step
              label="Contact Info"
              completedIcon={<IconNumber4 size="1.1rem" />}
            >
              <ContactInformationForm
                goPrevStep={stepControls.prev}
                goNextStep={stepControls.next}
              />
            </Stepper.Step>

            <Stepper.Step label="Done">
              <OnboardingSuccess />
            </Stepper.Step>

            <Stepper.Completed>
              <Center>
                Completed, click back button to get to the previous step
              </Center>
            </Stepper.Completed>
          </Stepper>
        </FormDataProvider>
      </PageContainer.Marketplace>
    </PageContainer>
  );
}
