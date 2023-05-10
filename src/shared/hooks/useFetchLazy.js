/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useLoadBatch } from './useLoadBatch';

export function useFetchLazy({ action, initialBatchSize }) {
  const [result, setResult] = useState([]);

  const { incrementBatch, currBatch } = useLoadBatch({
    batchSize: initialBatchSize,
  });

  const emptySlots = result.length !== currBatch ? Array(initialBatchSize) : [];
  const resultLazy = [...result, ...emptySlots];

  useEffect(() => {
    action(currBatch).then((data) => setResult(data));
  }, [currBatch]);

  const loadMore = () => incrementBatch();

  return { loadMore, resultLazy };
}
