import { ClipboardCheck } from 'iconoir-react';

import { StatCard } from '../StatCard';

export function WorkCompletedStat({ count, newCount }) {
  // Static content
  const titleComp = <StatCard.Title>Completed Work</StatCard.Title>;
  const iconComp = <StatCard.Icon iconType={ClipboardCheck} />;

  // Dynamicaly generated content
  const countComp = <StatCard.Count>{count}</StatCard.Count>;
  const newCountComp = (
    <StatCard.NewCount label="Completed work today">
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

WorkCompletedStat.defaultProps = {
  count: '100,000',
  newCount: 0,
};
