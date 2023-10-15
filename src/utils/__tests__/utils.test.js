import { formatDateToString, getCurrencyNumber } from '../utils';

describe.skip('Test Utilities', () => {
  it('should return a valid formatted due date when input is date', () => {
    const prefix = 'Due';
    const date = new Date(2023, 1, 8);
    const formattedDate = formatDateToString(prefix, date);

    expect(formattedDate).toBe('Due 08 Feb 2023');
  });

  it('should return a valid currency number with thousand separator', () => {
    const currencySimbol = '$';
    const number = 1800.9;
    const currencyNumber = getCurrencyNumber(currencySimbol, number);

    expect(currencyNumber).toBe('$1,800.9');
  });
});
