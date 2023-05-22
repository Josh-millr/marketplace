import toNumber from 'lodash/toNumber';
import { CheckCircle } from 'iconoir-react';

import { DashboardStatsCardLayout } from '../DashboardStatsCardLayout';

export function DashboardCompletedJobsStatsCard(props) {
  const { totalCount, newCount, showNewCount } = props;

  const newCountFormatted = newCount
    ? toNumber(newCount).toLocaleString()
    : null;
  const totalCountFormatted = totalCount
    ? toNumber(totalCount).toLocaleString()
    : null;

  return (
    <DashboardStatsCardLayout
      icon={<DashboardStatsCardLayout.Icon iconType={CheckCircle} />}
      headline={<DashboardStatsCardLayout.Headline label="Completed Jobs" />}
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
