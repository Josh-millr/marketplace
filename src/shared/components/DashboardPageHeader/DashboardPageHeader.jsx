import { Box, Grid, Text, Title, Stack, Button, Flex } from '@mantine/core';

import { useStyles } from './style.DashboardPageHeader';

function ActionButton({ btnLabel, action }) {
  return (
    <Button display="block" size="md" variant="filled" onClick={() => action()}>
      {btnLabel}
    </Button>
  );
}

export function DashboardPageHeader(props) {
  const { classes } = useStyles();

  const { title, descr, action, showButton, btnLabel } = props;

  return (
    <div className={classes.wrapper}>
      <Grid justify="space-between" gutter="4xl">
        <Grid.Col span={12} sm="content">
          <Stack spacing={0}>
            <Title className="title-lg">{title}</Title>
            <Text className="subtitle-sm" color="neutral.6" maw={480}>
              {descr}
            </Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={12} sm="content">
          <Flex w="100%" justify={{ base: 'flex-start', sm: 'flex-end' }}>
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
