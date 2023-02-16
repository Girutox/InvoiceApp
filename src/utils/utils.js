import { months } from '../models/months';

export const formatDateToString = (prefix, date) => {
  return `${prefix} ${date.getDate().toString().padStart(2, '0')} ${months[
    date.getMonth()
  ].substring(0, 3)} ${date.getFullYear()}`;
};

export const getCurrencyNumber = (currencySimbol, number) => {
  return `${currencySimbol}${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};
