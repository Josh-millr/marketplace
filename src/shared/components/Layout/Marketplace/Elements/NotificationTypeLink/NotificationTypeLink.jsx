import { NavLink, Badge } from '@mantine/core';

export function NotificationTypeLink(props) {
  const { label, count } = props;

  const badge = (
    <Badge variant="filled" size="sm">
      {count}
    </Badge>
  );

  return <NavLink label={label} rightSection={badge} />;
}
