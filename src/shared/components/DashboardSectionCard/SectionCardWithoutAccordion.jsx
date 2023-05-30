import { forwardRef } from 'react';

import { SectionBody } from './SectionBody';
import { SectionPagination } from './SectionPagination';

export const SectionCardWithoutAccordion = forwardRef((props, ref) => {
  const { children, showPagination } = props;

  return (
    <SectionBody ref={ref} {...props}>
      {children}
      {showPagination ? <SectionPagination /> : null}
    </SectionBody>
  );
});
