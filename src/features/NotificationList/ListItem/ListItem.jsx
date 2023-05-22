import { Text, Box, Stack, Group, Flex } from '@mantine/core';

import {
  ProjectCompletedBadgeIcon,
  ProposalAcceptedBadgeIcon,
  ServiceCompletedBadgeIcon,
  WithdrawalApprovedBadgeIcon,
} from '../BadgeSymbols/BadgeSymbols';

const cardTypes = {
  projectCompleted: {
    label: 'Project Completed',
    icon: <ProjectCompletedBadgeIcon />,
  },
  withdrawalApproved: {
    label: 'Withdrawal Approved',
    icon: <WithdrawalApprovedBadgeIcon />,
  },
  proposalAccepted: {
    label: 'Proposal Accepted',
    icon: <ProposalAcceptedBadgeIcon />,
  },
  serviceCompleted: {
    label: 'Service Completed',
    icon: <ServiceCompletedBadgeIcon />,
  },
};

export function ListItem({ type, descr, time }) {
  let activeType = {};

  switch (type) {
    case 'projectCompleted':
      activeType = cardTypes.projectCompleted;
      break;
    case 'withdrawalApproved':
      activeType = cardTypes.withdrawalApproved;
      break;
    case 'proposalAccepted':
      activeType = cardTypes.proposalAccepted;
      break;
    case 'serviceCompleted':
      activeType = cardTypes.serviceCompleted;
      break;
    default:
      activeType = {};
      return;
  }

  return (
    <Box p="lg">
      <Flex gap="lg">
        {/* Icon Badge */}
        {activeType.icon}

        {/* Content */}
        <Stack spacing="xs" w="100%">
          <Group position="apart" w="100%">
            <Text className="label-md" style={{ fontWeight: 700 }}>
              {activeType.label}
            </Text>
            <Text className="label-md">{time} hours ago</Text>
          </Group>

          <Text className="body-sm" maw={646}>{descr}</Text>
        </Stack>
      </Flex>
    </Box>
  );
}
