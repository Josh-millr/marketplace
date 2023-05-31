import { useState } from "react";
import { Stack, useMantineTheme, Progress, Text } from "@mantine/core";

import withStepper from "@/shared/hocs/withStepper";
import FormDataProvider from "@/shared/providers/FormDataProvider";
import { PageContainer } from "@/shared/components/PageContainer";

/**
 *
 * TODO: pass the increment and decrement functions to the parent component.
 *
 * */

const PROGRESS_INCREMENT = 20;
const MAX_PROGRESS_INCREMENT = 100;

export const ProgressStepper = (props) => {
  const [currProgress, setCurrProgress] = useState(PROGRESS_INCREMENT);

  const { incrementProgress, decrementProgress, components } = props;

  const { colors } = useMantineTheme();

  const FormSteps = withStepper(components);

  const progressStep = {
    decrement() {
      if (currProgress !== PROGRESS_INCREMENT) {
        setCurrProgress(currProgress - PROGRESS_INCREMENT);
      }
    },
    increment() {
      if (currProgress === MAX_PROGRESS_INCREMENT) {
        setCurrProgress(currProgress - PROGRESS_INCREMENT);
      }
    },
  };

  return (
    <div style={{ borderBottom: `1px solid ${colors.neutral[3]}` }}>
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <>
            <Stack spacing="md" py="xl">
              <Text className="label-md" fw={"500!important"}>
                Current Progress - {currProgress}%
              </Text>
              <Progress value={currProgress} radius="xl" striped animate />
            </Stack>

            <FormDataProvider>
              <FormSteps />
            </FormDataProvider>
          </>
        </PageContainer.Marketplace>
      </PageContainer>
    </div>
  );
};
