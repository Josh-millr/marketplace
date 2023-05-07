import { ErrorBoundary } from 'react-error-boundary';
import { resetAppRootError } from './errorHandler/resetAppRootError';
import { handleAppRootError } from './errorHandler/handleAppRootError';
import { FallbackUIAppRoot } from './FallbackUIAppRoot/FallbackUIAppRoot';

export function ErrorBoundaryAppRoot({ children }) {
  return (
    <ErrorBoundary
      onError={handleAppRootError}
      onReset={resetAppRootError}
      FallbackComponent={FallbackUIAppRoot}
    >
      {children}
    </ErrorBoundary>
  );
}
