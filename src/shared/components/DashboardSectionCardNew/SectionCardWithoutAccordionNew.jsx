import { SectionBodyNew } from './SectionBodyNew';
import { SectionTitleNew } from './SectionTitleNew';

export function SectionCardWithoutAccordionNew(props) {
  const { children, title } = props;

  return (
    <>
      {title ? <SectionTitleNew title={title} /> : null}
      <SectionBodyNew {...props}>{children}</SectionBodyNew>
      <div>{/* Pagination goes here */}</div>
    </>
  );
}
