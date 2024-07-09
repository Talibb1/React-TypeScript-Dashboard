import numeral from 'numeral';

// Define types for function parameters and return types
type NumericInput = number | string;

export const fNumber = (number: NumericInput): string => {
  return numeral(number).format();
};

export const fCurrency = (number: NumericInput): string => {
  const format = number ? numeral(number).format('$0,0.00') : '';
  return result(format, '.00');
};

export const fPercent = (number: NumericInput): string => {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';
  return result(format, '.0');
};

export const fShortenNumber = (number: NumericInput): string => {
  const format = number ? numeral(number).format('0.00a') : '';
  return result(format, '.00');
};

export const fData = (number: NumericInput): string => {
  const format = number ? numeral(number).format('0.0 b') : '';
  return result(format, '.0');
};

const result = (format: string, key: string = '.00'): string => {
  const isInteger = format.includes(key);
  return isInteger ? format.replace(key, '') : format;
};
