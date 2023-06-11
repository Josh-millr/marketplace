import { SectionWrapper } from './SectionWrapperNew';
import { SectionCardWithAccordion } from './SectionCardWithAccordionNew';
import { SectionCardWithoutAccordion } from './SectionCardWithoutAccordionNew';

export function DashboardSectionCardNew(props) {
  const { showAccordion, children } = props;

  return (
    <SectionWrapper>
      {showAccordion ? (
        <SectionCardWithAccordion {...props}>
          {children}
        </SectionCardWithAccordion>
      ) : (
        <SectionCardWithoutAccordion>{children}</SectionCardWithoutAccordion>
      )}
    </SectionWrapper>
  );
}
