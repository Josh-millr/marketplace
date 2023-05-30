import { Badge, Title, Stack, Text } from '@mantine/core';
import { ViewGrid, MediaVideoFolder, Linear } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';

function OptionTypeBadge({ type }) {
  let typeObj = {
    label: '',
    icon: '',
  };

  switch (type) {
    case 'freeForm':
      typeObj = { label: 'Free form', icon: iconCreator({ icon: Linear }) };
      break;
    case 'attachment':
      typeObj = {
        label: 'Attachment',
        icon: iconCreator({ icon: MediaVideoFolder }),
      };
      break;
    case 'multipleChoice':
      typeObj = {
        label: 'Multiple Choice',
        icon: iconCreator({ icon: ViewGrid }),
      };
      break;

    default:
      return;
  }
  return (
    <Badge pl={0} size="lg" color="teal" radius="xl" leftSection={typeObj.icon}>
      {typeObj.label}
    </Badge>
  );
}

export function DashboardNewRequirementCard(props) {
  const { type, question, options } = props;

  return (
    <Stack spacing="dm">
      <div>
        <OptionTypeBadge type={type} />
      </div>

      <Stack spacing="sm">
        <Title className="sub-h1">{question}</Title>

        {type === 'multipleChoice' && (
          <Text className="label-md">Options: {options.length}</Text>
        )}
      </Stack>
    </Stack>
  );
}
