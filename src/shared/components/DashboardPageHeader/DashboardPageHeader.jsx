import { Box, Grid, Text, Title, Stack, Button } from '@mantine/core';

import { useStyles } from './style.DashboardPageHeader';

export function DashboardPageHeader(props) {
  const { classes } = useStyles();

  const { title, descr, action, showButton, btnLabel } = props;

  return (
    <Box className={classes.wrapper}>
      <Grid justify="space-between" gutter="lg">
        <Grid.Col span="auto">
          <Stack spacing={0}>
            <Title className="title-md">{title}</Title>
            <Text className="subtitle-sm" color="neutral.6" maw={480}>
              {descr}
            </Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={2}>
          {showButton && (
            <Button
              ml="auto"
              display="block"
              size="md"
              variant="filled"
              onClick={() => action()}
            >
              {btnLabel}
            </Button>
          )}
        </Grid.Col>
      </Grid>
    </Box>
  );
}

DashboardPageHeader.defaultProps = {
  title: 'Dashboard Page',
  descr: '',
  action: () => {},
  showButton: false,
  btnLabel: 'label',
};
