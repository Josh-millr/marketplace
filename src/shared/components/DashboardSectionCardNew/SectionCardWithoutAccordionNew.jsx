import { SectionBodyNew } from './SectionBodyNew';

export function SectionCardWithoutAccordionNew(props) {
  const { children } = props;

  return (
    <>
      <SectionBodyNew {...props}>{children}</SectionBodyNew>
      <div>{/* Pagination goes here */}</div>
    </>
  );
}
