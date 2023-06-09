import { memo } from 'react';
import { ViewGrid, Clock } from 'iconoir-react';
import {
  Title,
  Text,
  Stack,
  Group,
  Button,
    Grid,
  Flex,
  Skeleton,
  useMantineTheme,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import { CustomSuspense } from '../CustomSuspense';
import { useStyles } from '../DashboardServiceCardListItem/style.DashboardServiceCardListItem';

export const DashboardWithdrawalCardListItem = memo((props) => {
  const { id, withdrawalMethod, amount,  createdAt, status  } = props;

  const { classes } = useStyles();
  const { breakpoints } = useMantineTheme();
  const isNotMobile = useMediaQuery(`(min-width: ${breakpoints.sm})`);

  let statusColor;
  if (status === 'Sent') {
    statusColor = 'cyan';
  } else if (status === 'Pending') {
    statusColor = 'orange';
  } else if (status === 'Rejected') {
    statusColor = 'pink';
  }else {
    statusColor = 'light';
  }

  return (
    <Grid
      py="xl"
      gap="sm"
      className={classes.wrapper}
      px={{ base: 0, sm: 'xl' }}
      justify="space-between"
    >
      <Grid.Col span="auto">
        <Stack spacing="md">
          {/* Service Title */}
          <CustomSuspense
            dependency={withdrawalMethod}
            fallback={<Skeleton height="12px" w="70%" />}
                  >

            <Flex
                justify="space-between">  
             <Grid.Col span={12} sm={2} md={2} >
              <Title
                lineClamp={2}
                className={isNotMobile ? 'sub-h1' : 'sub-h2'}
                style={{ fontWeight: 200 }}
              >
                Withdrawal Method:
              </Title>
              <Text size="md" style={{ fontWeight: 700 }}>
                 {withdrawalMethod}
              </Text>
            </Grid.Col>
            <Text size="lg" style={{ fontWeight: 700 }}>
                {amount}
            </Text>
            </Flex> 
          </CustomSuspense>
        
             <Flex justify="space-between">
             <Grid.Col span={12} sm={2} md={10} >
              <Title
                lineClamp={2}
                className={isNotMobile ? 'sub-h1' : 'sub-h2'}
                style={{ fontWeight: 200 }}
              >
               Date:
              </Title>
              <Text size="md" style={{ fontWeight: 700 }}>
                 {createdAt}
              </Text>
                </Grid.Col>
            <Button variant="light" color={statusColor}>
              {status}
            </Button>
            </Flex>
          
        </Stack>
      </Grid.Col>
    </Grid>
  );
});
