import { Paper, Stack, Divider } from '@mantine/core';

import { DashboardSectionTitle } from '@/shared/components/DashboardSectionTitle';
import { ListItem } from './ListItem/ListItem';

export function NotificationList() {
  return (
    <Paper withBorder radius="sm" mt={24} mb={24}>
      <DashboardSectionTitle title="Notification" />
      <Divider />

      <Stack>
        <ListItem
          type="projectCompleted"
          time={2}
          descr="The application is undo approved on your full-stack engineer and
           the application is undo approved on your job modern eCommerce website
           by employer"
        />
        <Divider />
        <ListItem
          type="withdrawalApproved"
          time={4}
          descr="The application is undo approved on your full-stack engineer and
           the application is undo approved on your job modern eCommerce website
           by employer"
        />
        <Divider />
        <ListItem
          type="proposalAccepted"
          time={14}
          descr="The application is undo approved on your full-stack engineer and
           the application is undo approved on your job modern eCommerce website
           by employer"
        />
        <Divider />
        <ListItem
          type="serviceCompleted"
          time={1}
          descr="The application is undo approved on your full-stack engineer and
           the application is undo approved on your job modern eCommerce website
           by employer"
        />
      </Stack>
    </Paper>
  );
}
