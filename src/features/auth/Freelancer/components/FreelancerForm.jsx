import React, { useState } from 'react';
import {
  Stepper,
  Button,
  Group,
  Content,
  ProgressBar,
  MediaQuery,
  Text,
  Paper,
} from '@mantine/core';
import {
  IconMathGreater,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
} from '@tabler/icons-react';
import FormDataProvider from '@/shared/providers/FormDataProvider';
import { PersonalInformationForm } from './PersonalInformationForm';
import { ProfessionalInformationForm } from './ProfessionalInformationForm';
import { ExperienceInformationForm } from './ExperienceInformationForm';
import { ContactInformationForm } from './ContactInformationForm';
import { OnboardingSuccess } from './OnboardingSuccess';

export function FreelancerForm() {
  const totalSteps = 4;
  const [active, setActive] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  const progress = ((activeStep + 1) / totalSteps) * 100;

  const handleStepChange = (nextStep) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  const shouldAllowSelectStep = (step) =>
    highestStepVisited >= step && active !== step;

  const handleSubmit = (formData) => {
    console.log('Form submitted');
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  return (
    <>
      <MediaQuery query="(min-width: 62em)">
        <div style={{ margin: '0 auto' }}>
          <FormDataProvider onSubmit={handleSubmit}>
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
              <Stepper.Step
                label="Done"
                allowStepSelect={shouldAllowSelectStep(4)}
              >
                <OnboardingSuccess />
              </Stepper.Step>

              <Stepper.Completed>
                <Content>
                  Completed, click back button to get to the previous step
                </Content>
              </Stepper.Completed>
            </Stepper>
          </FormDataProvider>
          <Group position="left" mt="xl">
            <Button
              variant="outline"
              leftIcon={<IconMathGreater size="1rem" />}
              onClick={() => handleStepChange(active - 1)}
              disabled={active === 0}
            >
              Go Back
            </Button>
            {active === 3 ? (
              <Button type="submit" form="formData">
                Finish
              </Button>
            ) : (
              <Button onClick={() => handleStepChange(active + 1)}>
                Next step
              </Button>
            )}
          </Group>
        </div>
      </MediaQuery>

      <MediaQuery query="(max-width: 62em) and (min-width: 36em)">
        <div style={{ margin: '0 auto' }}>
          <FormDataProvider onSubmit={handleSubmit}>
            <Text variant="h4" align="center" style={{ marginBottom: '1rem' }}>
              Current Progress - {progress}%
            </Text>

            <ProgressBar
              value={progress}
              color="green"
              striped
              style={{ marginBottom: '2rem' }}
            />

            <Paper padding="lg">
              {activeStep === 0 && (
                <>
                  <Text
                    variant="h2"
                    align="center"
                    style={{ marginBottom: '1rem' }}
                  >
                    Personal Information
                  </Text>
                  <PersonalInformationForm onNextStep={handleNextStep} />
                </>
              )}

              {activeStep === 1 && (
                <>
                  <Text
                    variant="h2"
                    align="center"
                    style={{ marginBottom: '1rem' }}
                  >
                    Professional Information
                  </Text>
                  <ProfessionalInformationForm
                    onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep}
                  />
                </>
              )}

              {activeStep === 2 && (
                <>
                  <Text
                    variant="h2"
                    align="center"
                    style={{ marginBottom: '1rem' }}
                  >
                    Experience Information
                  </Text>
                  <ExperienceInformationForm
                    onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep}
                  />
                </>
              )}

              {activeStep === 3 && (
                <>
                  <Text
                    variant="h2"
                    align="center"
                    style={{ marginBottom: '1rem' }}
                  >
                    Contact Information
                  </Text>
                  <ContactInformationForm
                    onSubmit={handleSubmit}
                    onPreviousStep={handlePreviousStep}
                  />
                </>
              )}
            </Paper>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2rem',
              }}
            >
              {activeStep > 0 && (
                <Button onClick={handlePreviousStep}>Go Back</Button>
              )}

              {activeStep < totalSteps - 1 && (
                <Button onClick={handleNextStep} variant="filled">
                  Next
                </Button>
              )}

              {activeStep === totalSteps - 1 && (
                <Button onClick={handleSubmit} variant="filled">
                  Finish
                </Button>
              )}
            </div>
          </FormDataProvider>
        </div>
      </MediaQuery>
    </>
  );
}
