import { useMemo } from 'react';
import numeral from 'numeral';
import { useScrollTrigger } from '@mui/material';

export const DEFAULT_CURRENCY = '₺';

export type UseElevationScrollProps = {
  startElevation?: number;
  scrollElevation?: number;
};

export const useElevationScroll = ({
  startElevation = 0,
  scrollElevation = 4,
}: UseElevationScrollProps = {}): number => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return trigger ? scrollElevation : startElevation;
};
