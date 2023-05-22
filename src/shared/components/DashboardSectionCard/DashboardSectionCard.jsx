import { Paper, useMantineTheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { DashboardSectionTitle } from '../DashboardSectionTitle';

export function DashboardSectionCard(props) {
  const { children, withTitle, title, contentFullWidth, padSection } = props;

  const { breakpoints } = useMantineTheme();
  const mobileScreen = useMediaQuery(`(min-width: ${breakpoints.sm}px)`);

  return (
    <Paper withBorder={mobileScreen} radius="sm" mt={24} mb={24}>
      {withTitle && <DashboardSectionTitle title={title} />}
      <Box maw={contentFullWidth ? '100%' : 800} p={padSection ? 'xl' : 0}>
        {children}
      </Box>
    </Paper>
  );
}