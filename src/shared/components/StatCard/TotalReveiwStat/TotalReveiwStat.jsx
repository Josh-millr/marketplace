import { MessageText } from 'iconoir-react';

import { StatCard } from '../StatCard';

export function TotalReveiwStat({ count, newCount }) {
  // Static content
  const titleComp = <StatCard.Title>Total Review</StatCard.Title>;
  const iconComp = <StatCard.Icon iconType={MessageText} />;

  // Dynamicaly generated content
  const countComp = <StatCard.Count>{count}</StatCard.Count>;
  const newCountComp = (
    <StatCard.NewCount label="New reviews today">{newCount}</StatCard.NewCount>
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

TotalReveiwStat.defaultProps = {
  count: '100,000',
  newCount: 0,
};
