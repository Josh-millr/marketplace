import { Accordion } from '@mantine/core';

import { SectionBodyNew } from './SectionBodyNew';
import { SectionTitleNew } from './SectionTitleNew';

export function SectionCardWithAccordionNew(props) {
  const { title = 'Label', children } = props;

  return (
    <Accordion chevronPosition="right">
      <Accordion.Item value={title}>
        <Accordion.Control>
          <SectionTitleNew title={title} />
        </Accordion.Control>

        <Accordion.Panel>
          <SectionBodyNew {...props}>{children}</SectionBodyNew>
          <div>{/* Pagination goes here */}</div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
