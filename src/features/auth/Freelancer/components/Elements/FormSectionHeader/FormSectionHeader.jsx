import { useStyles } from "./style.FormSectionHeader";
import { Title, Text, Stack } from "@mantine/core";

export function FormSectionHeader({ title, description }) {
  const { classes } = useStyles();

  return (
    <div className={classes.formSectionWrapper}>
      <Stack spacing="lg" py="2xl">
        <Title className="h1" tt="capitalize">
          {title}
        </Title>
        <Text className="body-md" c="neutral.6">
          {description}{" "}
        </Text>
      </Stack>
    </div>
  );
}
