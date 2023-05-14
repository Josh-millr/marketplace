/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';
import { useLoadBatch } from './useLoadBatch';

export function useFetchLazy({ action, initialBatchSize }) {
  const [result, setResult] = useState([]);
  const [maxResult, setMaxResult] = useState(false);

  const { incrementBatch, currBatch } = useLoadBatch({
    batchSize: initialBatchSize,
  });

  const emptySlots = result.length !== currBatch ? Array(initialBatchSize) : [];
  const resultLazy = maxResult ? result : [...result, ...emptySlots];

  useEffect(() => {
    const fetchData = async () => {
      const data = await action(currBatch);
      setResult(data);

      if (data.length < currBatch) setMaxResult(true);
    };

    fetchData();
  }, [currBatch]);

  const loadMore = useCallback(() => {
    if (!maxResult) incrementBatch();
  }, [maxResult, incrementBatch]);

  return { loadMore, resultLazy, maxResult };
}
