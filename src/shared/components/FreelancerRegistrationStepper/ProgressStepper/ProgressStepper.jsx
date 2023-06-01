import { useState } from "react";
import { Stack, useMantineTheme, Progress, Text } from "@mantine/core";

import withStepper from "@/shared/hocs/withStepper";
import FormDataProvider from "@/shared/providers/FormDataProvider";
import { PageContainer } from "@/shared/components/PageContainer";

import { useStyles } from "./style.ProgressStepper";

const PROGRESS_INCREMENT = 20;
const MAX_PROGRESS_INCREMENT = 100;

export const ProgressStepper = ({ components }) => {
  const [currProgress, setCurrProgress] = useState(PROGRESS_INCREMENT);

  const { classes } = useStyles();
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
    <>
      <div className={classes.wrapper}>
        <PageContainer layout="marketplace">
          <PageContainer.Marketplace>
            <Stack spacing="md" py="xl">
              <Text className="label-md" fw={"500!important"}>
                Current Progress - {currProgress}%
              </Text>
              <Progress value={currProgress} radius="xl" striped animate />
            </Stack>
          </PageContainer.Marketplace>
        </PageContainer>
      </div>

      <FormDataProvider>
        <FormSteps
          incrementProgress={progressStep.increment}
          decrementProgress={progressStep.decrement}
        />
      </FormDataProvider>
    </>
  );
};
