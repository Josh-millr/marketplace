import { ThemeIcon, useMantineTheme } from '@mantine/core';
import { PageStar, JournalPage, LargeSuitcase, Coins } from 'iconoir-react';

const iconSize = 20;

export function ProjectCompletedBadgeIcon() {
  const { colors } = useMantineTheme();

  const iconColor = colors.eastSide[9];
  const badgeColor = colors.eastSide[2];

  return (
    <ThemeIcon variant="light" size="lg" radius="sm" color={badgeColor}>
      <PageStar height={iconSize} width={iconSize} color={iconColor} />
    </ThemeIcon>
  );
}

export function ProposalAcceptedBadgeIcon() {
  const { colors } = useMantineTheme();

  const iconColor = colors.flatBlue[9];
  const badgeColor = colors.flatBlue[2];

  return (
    <ThemeIcon variant="light" size="lg" radius="sm" color={badgeColor}>
      <JournalPage height={iconSize} width={iconSize} color={iconColor} />
    </ThemeIcon>
  );
}

export function ServiceCompletedBadgeIcon() {
  const { colors } = useMantineTheme();

  const iconColor = colors.orangeville[9];
  const badgeColor = colors.orangeville[2];

  return (
    <ThemeIcon variant="light" size="lg" radius="sm" color={badgeColor}>
      <LargeSuitcase height={iconSize} width={iconSize} color={iconColor} />
    </ThemeIcon>
  );
}

export function WithdrawalApprovedBadgeIcon() {
  const { colors } = useMantineTheme();

  const iconColor = colors.mediumAquamarine[9];
  const badgeColor = colors.mediumAquamarine[2];

  return (
    <ThemeIcon variant="light" size="lg" radius="sm" color={badgeColor}>
      <Coins height={iconSize} width={iconSize} color={iconColor} />
    </ThemeIcon>
  );
}
