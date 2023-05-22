import toNumber from 'lodash/toNumber';
import { Hourglass } from 'iconoir-react';

import { DashboardStatsCardLayout } from '../DashboardStatsCardLayout';

export function DashboardOngoingJobsStatsCard(props) {
  const { totalCount, newCount, showNewCount } = props;

  const newCountFormatted = newCount
    ? toNumber(newCount).toLocaleString()
    : null;
  const totalCountFormatted = totalCount
    ? toNumber(totalCount).toLocaleString()
    : null;

  return (
    <DashboardStatsCardLayout
      icon={<DashboardStatsCardLayout.Icon iconType={Hourglass} />}
      headline={<DashboardStatsCardLayout.Headline label="Ongoing Jobs" />}
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
