import { MultiplePages } from 'iconoir-react';

import { StatCard } from '../StatCard';

export function WorkOfferStat({ count, newCount }) {
  // Static content
  const titleComp = <StatCard.Title>Work offers</StatCard.Title>;
  const iconComp = <StatCard.Icon iconType={MultiplePages} />;

  // Dynamicaly generated content
  const countComp = <StatCard.Count>{count}</StatCard.Count>;
  const newCountComp = (
    <StatCard.NewCount label="New Offers today">{newCount}</StatCard.NewCount>
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

WorkOfferStat.defaultProps = {
  count: '100,000',
  newCount: 0,
};
