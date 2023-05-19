import { Title, Stack } from '@mantine/core';

import { useStyles } from './style.CategoryPageBanner';

export function CategoryPageBanner({ title }) {
  const { classes } = useStyles();

  return (
    <Stack justify="center" className={classes.wrapper}>
      <Title className="h2" tt="capitalize">
        {title}
      </Title>
    </Stack>
  );
}
