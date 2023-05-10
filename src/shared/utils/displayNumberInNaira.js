import { currencyUnitConverter } from './currencyUnitConverter';
import { formatNumericAsCurrency } from './formatNumericAsCurrency';

export const displayNumberInNaira = (unformatted) => {
  const formatUnit = currencyUnitConverter.fromSmallestUnit(unformatted);
  const formatAsCurrency = formatNumericAsCurrency(formatUnit);
  return ` ₦${formatAsCurrency}`;
};
