import { useState } from 'react';

export function useLoadBatch({ batchSize }) {
  const [currBatch, setCurrBatch] = useState(batchSize);

  const incrementBatch = () => setCurrBatch(currBatch + batchSize);
  return { incrementBatch, currBatch };
}
