import { memo } from 'react';
import { MoreHoriz } from 'iconoir-react';
import { ActionIcon } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

// TODO: Implement edit & delete service function

export const ActionsButton = memo(() => (
  <ActionIcon variant="light" size="lg">
    {iconCreator({ icon: MoreHoriz, sizeOverride: 24 })}
  </ActionIcon>
));
