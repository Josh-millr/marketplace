/* eslint-disable no-nested-ternary */
import { forwardRef, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, useMantineTheme, Box, ScrollArea, Flex, Pagination } from '@mantine/core';

import { useStyles } from './style.DashboardSectionCard';

import { DashboardSectionTitle } from '../DashboardSectionTitle';

export const DashboardSectionCard = forwardRef((props, ref) => {
  const [activePage, setActivePage] = useState(1);
  const { classes } = useStyles();

  const { children, withTitle, title, contentFullWidth, padSection } = props;

  const { breakpoints } = useMantineTheme();
  const mobileScreen = useMediaQuery(`(min-width: ${breakpoints.sm})`);

  return (
    <Paper
      ref={ref}
      className={classes.wrapper}
      withBorder={mobileScreen}
      radius="sm"
      mt={24}
      mb={24}
      h={480}
    >
      <div>
        {withTitle && <DashboardSectionTitle title={title} />}
        <Box
          maw={contentFullWidth ? '100%' : 800}
          p={padSection ? (mobileScreen ? 'xl' : 0) : 0}
        >
          <ScrollArea h={480} type="auto" offsetScrollbars scrollbarSize={8}>
            {children}
          </ScrollArea>
          <Flex w="100%" justify="center">
            <Pagination
              withEdges
              total={10}
              size="sm"
              radius="xl"
              value={activePage}
              onChange={setActivePage}
            />
          </Flex>
        </Box>
      </div>
    </Paper>
  );
});
