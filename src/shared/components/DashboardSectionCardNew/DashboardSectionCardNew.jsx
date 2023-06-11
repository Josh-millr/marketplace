import { SectionWrapperNew } from './SectionWrapperNew';
import { SectionCardWithAccordionNew } from './SectionCardWithAccordionNew';
import { SectionCardWithoutAccordionNew } from './SectionCardWithoutAccordionNew';

export function DashboardSectionCardNew(props) {
  const { showAccordion, children } = props;

  return (
    <SectionWrapperNew>
      {showAccordion ? (
        <SectionCardWithAccordionNew {...props}>
          {children}
        </SectionCardWithAccordionNew>
      ) : (
        <SectionCardWithoutAccordionNew>{children}</SectionCardWithoutAccordionNew>
      )}
    </SectionWrapperNew>
  );
}
