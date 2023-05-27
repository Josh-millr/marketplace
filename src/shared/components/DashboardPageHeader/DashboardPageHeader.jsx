<<<<<<< HEAD
import { Box, Grid, Text, Title, Stack, Button } from '@mantine/core';
=======
import { Grid, Text, Title, Stack, Button, Flex } from '@mantine/core';
>>>>>>> 26474cec3571449b32feba98cefa71fb45494a17

import { useStyles } from './style.DashboardPageHeader';

function ActionButton({ btnLabel, action }) {
  return (
    <Button
      display="block"
      size="md"
      variant="filled"
      onClick={() => action()}
    >
      {btnLabel}
    </Button>
  );
}

export function DashboardPageHeader(props) {
  const { classes } = useStyles();

  const { title, descr, action, showButton, btnLabel } = props;

  return (
<<<<<<< HEAD
    <Box className={classes.wrapper}>
      <Grid justify="space-between" gutter="lg">
        <Grid.Col span="auto">
=======
    <div className={classes.wrapper}>
      <Grid justify="space-between" gutter="4xl">
        <Grid.Col span={12} sm="content">
>>>>>>> 26474cec3571449b32feba98cefa71fb45494a17
          <Stack spacing={0}>
            <Title className="title-lg">{title}</Title>
            <Text className="subtitle-sm" color="neutral.6" maw={480}>
              {descr}
            </Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={12} sm="content">
          <Flex w='100%' justify={{ base: 'flex-start', sm: 'flex-end' }}>
            {showButton && <ActionButton action={action} btnLabel={btnLabel} />}
          </Flex>
        </Grid.Col>
      </Grid>
    </div>
  );
}

DashboardPageHeader.defaultProps = {
  title: 'Dashboard Page',
  descr: '',
  action: () => {},
  showButton: false,
  btnLabel: 'label',
};
