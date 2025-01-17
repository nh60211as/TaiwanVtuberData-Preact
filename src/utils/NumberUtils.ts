import { GrowthRecordType } from '../types/Common/GrowthData';

export const PrependSign = (value: number): string => {
  if (value > 0) return `+${value}`;
  if (value < 0) return `${value}`;

  return '0';
};

const valueToPercentString = (value: number): string =>
  (value * 100).toFixed(2);

export const GrowthDisplayDataToString = (
  e: { diff: number; recordType: GrowthRecordType; percentage?: number },
  tableTranslation: { noRecord: string; atLeast: string },
): string => {
  if (e.percentage) {
    switch (e.recordType) {
      case 'none':
        return tableTranslation.noRecord;
      case 'partial':
        return `${tableTranslation.atLeast} ${PrependSign(
          e.diff,
        )} (${valueToPercentString(e.percentage as number)}%)`;
      case 'full':
        return `${PrependSign(e.diff)} (${valueToPercentString(
          e.percentage,
        )}%)`;
    }
  }

  switch (e.recordType) {
    case 'none':
      return tableTranslation.noRecord;
    case 'partial':
      return `${tableTranslation.atLeast} ${PrependSign(e.diff)}`;
    case 'full':
      return `${PrependSign(e.diff)}`;
  }
};

export const tryParseInteger = (
  str: string | undefined,
  defaultValue: number,
): number => {
  if (str !== undefined) {
    const parsedVal = parseInt(str, 10);
    if (isNaN(parsedVal) === false) {
      return parsedVal;
    }
  }

  return defaultValue;
};
