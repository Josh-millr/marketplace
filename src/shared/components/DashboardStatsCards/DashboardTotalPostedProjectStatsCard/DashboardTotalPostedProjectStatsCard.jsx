import toNumber from 'lodash/toNumber';
import { MultiplePages } from 'iconoir-react';

import { DashboardStatsCardLayout } from '../DashboardStatsCardLayout';

export function DashboardTotalPostedProjectStatsCard(props) {
  const { totalCount, newCount, showNewCount } = props;

  const newCountFormatted = newCount
    ? toNumber(newCount).toLocaleString()
    : null;
  const totalCountFormatted = totalCount
    ? toNumber(totalCount).toLocaleString()
    : null;

  return (
    <DashboardStatsCardLayout
      icon={<DashboardStatsCardLayout.Icon iconType={MultiplePages} />}
      headline={<DashboardStatsCardLayout.Headline label="Posted Projects" />}
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
