import { useRef, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { useMantineTheme } from '@mantine/core';

/**
 * A very simple, highly customisable youtube-like react loader component.
 *
 * @see https://github.com/klendi/react-top-loading-bar
 */

export const PageLoadingBar = memo(() => {
  const { loading } = useSelector((state) => state.general);
  const { colors } = useMantineTheme();
  const ref = useRef(null);

  useEffect(() => {
    if (loading) ref.current.continuousStart();
    if (!loading) ref.current.complete();
  }, [loading]);

  return <LoadingBar color={colors.brandPrimary[6]} ref={ref} height={4} />;
});
