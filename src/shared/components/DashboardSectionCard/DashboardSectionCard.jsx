import { forwardRef } from 'react';

import { SectionWrapper } from './SectionWrapper';
import { SectionCardWithAcordion } from './SectionCardWithAcordion';
import { SectionCardWithoutAccordion } from './SectionCardWithoutAccordion';

export const DashboardSectionCard = forwardRef((props, ref) => {
  const { title, children } = props;

  return (
    <SectionWrapper {...props}>
      {title?.length > 0 ? (
        <SectionCardWithAcordion ref={ref} {...props}>
          {children}
        </SectionCardWithAcordion>
      ) : (
        <SectionCardWithoutAccordion ref={ref} {...props}>
          {children}
        </SectionCardWithoutAccordion>
      )}
    </SectionWrapper>
  );
});
