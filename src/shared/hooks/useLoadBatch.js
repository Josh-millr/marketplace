import { useState, useCallback } from 'react';

export function useLoadBatch({ batchSize }) {
  const [currBatch, setCurrBatch] = useState(batchSize);

  const incrementBatch = useCallback(() => {
    setCurrBatch((prevBatch) => prevBatch + batchSize);
  }, [batchSize]);
  return { incrementBatch, currBatch };
}
