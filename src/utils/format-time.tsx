import { format, getTime, formatDistanceToNow } from 'date-fns';

// Define types for function parameters and return types
type DateInput = string | number | Date;

export const fDate = (date: DateInput, newFormat: string = 'dd MMM yyyy'): string => {
  return date ? format(new Date(date), newFormat) : '';
};

export const fDateTime = (date: DateInput, newFormat: string = 'dd MMM yyyy p'): string => {
  return date ? format(new Date(date), newFormat) : '';
};

export const fTimestamp = (date: DateInput): number | '' => {
  return date ? getTime(new Date(date)) : '';
};

export const fToNow = (date: DateInput): string => {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
};
