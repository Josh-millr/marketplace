import { Text } from '@mantine/core';

import { useStyles } from './style.SectionTitleNew';

export function SectionTitleNew({ title }) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Text className="label-md" color="neutral.7" fw={'500!important'}>
        {title}
      </Text>
    </div>
  );
}
