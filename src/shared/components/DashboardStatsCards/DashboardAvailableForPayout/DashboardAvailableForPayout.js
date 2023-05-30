import { PageFlip } from 'iconoir-react';

import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { DashboardStatsCardLayout } from '../DashboardStatsCardLayout';

export function DashboardAvailableForPayoutStatsCard(props) {
  const { totalCount, newCount, showNewCount } = props;

  const newCountFormatted = newCount ? displayNumberInNaira(newCount) : null;
  const totalCountFormatted = totalCount
    ? displayNumberInNaira(totalCount)
    : null;

  return (
    <DashboardStatsCardLayout
      icon={<DashboardStatsCardLayout.Icon iconType={PageFlip} />}
      headline={<DashboardStatsCardLayout.Headline label="Available for Payout" />}
      count={
        <DashboardStatsCardLayout.TotalCount count={totalCountFormatted} />
      }
      newCount={
        showNewCount ? (
          <DashboardStatsCardLayout.NewCount
            count={newCountFormatted}
            label="new projects"
          />
        ) : (
          ''
        )
      }
    />
  );
}
