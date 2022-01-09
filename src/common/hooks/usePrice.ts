import { useMemo } from 'react';
import numeral from 'numeral';

export const DEFAULT_CURRENCY = '₺';

export type UsePriceProps = {
  value: number;
  currency?: string;
};

export const usePrice = ({
  value,
  currency = DEFAULT_CURRENCY,
}: UsePriceProps): string => {
  const result = useMemo(
    () => `${currency} ${numeral(value).format('0,0.00')}`,
    [currency, value]
  );

  return result;
};
