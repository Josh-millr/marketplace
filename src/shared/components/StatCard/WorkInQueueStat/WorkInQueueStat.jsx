import { Hourglass } from 'iconoir-react';

import { StatCard } from '../StatCard';

export function WorkInQueueStat({ count, newCount }) {
  // Static content
  const titleComp = <StatCard.Title>Work in Queue</StatCard.Title>;
  const iconComp = <StatCard.Icon iconType={Hourglass} />;

  // Dynamicaly generated content
  const countComp = <StatCard.Count>{count}</StatCard.Count>;
  const newCountComp = (
    <StatCard.NewCount label="Added to queue today">
      {newCount}
    </StatCard.NewCount>
  );

  return (
    <StatCard
      icon={iconComp}
      title={titleComp}
      count={countComp}
      newCount={newCountComp}
    />
  );
}

WorkInQueueStat.defaultProps = {
  count: '100,000',
  newCount: 0,
};
