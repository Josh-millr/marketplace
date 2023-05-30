import { Coin } from 'iconoir-react';

import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { DashboardStatsCardLayout } from '../DashboardStatsCardLayout';

export function DashboardNetIncomeStatsCard(props) {
  const { totalCount, newCount, showNewCount } = props;

  const newCountFormatted = newCount ? displayNumberInNaira(newCount) : null;
  const totalCountFormatted = totalCount
    ? displayNumberInNaira(totalCount)
    : null;

  return (
    <DashboardStatsCardLayout
      icon={<DashboardStatsCardLayout.Icon iconType={Coin} />}
      headline={<DashboardStatsCardLayout.Headline label="Net Income" />}
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
