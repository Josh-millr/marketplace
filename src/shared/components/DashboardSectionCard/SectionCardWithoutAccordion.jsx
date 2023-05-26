import { forwardRef } from 'react';

import { SectionBody } from './SectionBody';
import { SectionPagination } from './SectionPagination';

export const SectionCardWithoutAccordion = forwardRef((props, ref) => {
  const { children } = props;

  return (
    <SectionBody ref={ref} {...props}>
      {children}
      <SectionPagination />
    </SectionBody>
  );
});
