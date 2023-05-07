import { Error500, Error404 } from '@/shared/components/PageSections/Error';

export default function Error({ statusCode }) {
  switch (statusCode) {
    case 404:
      return <Error404 />;
    case 500:
      return <Error500 />;
    default:
      return <div>There is an Error {statusCode}</div>;
  }
}

Error.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
