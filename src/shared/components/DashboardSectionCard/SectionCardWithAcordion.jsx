import { forwardRef } from 'react';
import { Accordion } from '@mantine/core';

import { SectionBody } from './SectionBody';
import { SectionPagination } from './SectionPagination';
import { DashboardSectionTitle } from '../DashboardSectionTitle';

export const SectionCardWithAcordion = forwardRef((props, ref) => {
  const { title, children } = props;

  return (
    <Accordion chevronPosition="right">
      <Accordion.Item value={title}>
        <Accordion.Control>
          <DashboardSectionTitle title={title} />
        </Accordion.Control>
        <Accordion.Panel>
          <SectionBody ref={ref} {...props}>
            {children}
          </SectionBody>
          <SectionPagination />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
});
