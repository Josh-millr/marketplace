import { Error500 } from '@/shared/components/PageSections/Error';

function Custom500() {
  return <Error500 />;
}

export async function getStaticProps() {
  return { props: {} };
}

export default Custom500;