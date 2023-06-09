import { Error404 } from "@/shared/components/PageSections/Error";

function Custom404() {
  return <Error404 />;
}

export async function getStaticProps() {
  return { props: {} };
}

export default Custom404;
