import { useState } from "react";
import { Stack, useMantineTheme, Progress } from "@mantine/core";

/**
 *
 * TODO: Add horizontal padding to section
 * TODO: pass the increment and decrement functions to the parent component.
 *
 **/

const PROGRESS_INCREMENT = 20;
const MAX_PROGRESS_INCREMENT = 100;

export const ProgressStepper = ({ incrementProgress, decrementProgress }) => {
  const [currProgress, setCurrProgress] = useState(PROGRESS_INCREMENT);

  const { colors } = useMantineTheme();

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
      <Stack spacing="md" py="xl">
        <Text className="label-md" fw={"500!important"}>
          `Current Progress - (${currProgress})%`
        </Text>
        <Progress striped animate value={50} radius="xl" value={progress} />
      </Stack>
    </div>
  );
};
