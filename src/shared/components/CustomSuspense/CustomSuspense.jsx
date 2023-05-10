export const CustomSuspense = ({ dependency, fallback, children }) =>
  (dependency ? children : fallback);
