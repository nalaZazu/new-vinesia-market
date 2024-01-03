import { Magic } from '@/context/MagicProvider';
import { CurrencyValue } from '@/types/editionOverview.dto';
import { Dispatch, SetStateAction } from 'react';

export type LoginMethod = 'EMAIL' | 'SMS' | 'SOCIAL' | 'FORM';

export const logout = async (setToken: Dispatch<SetStateAction<string>>, magic: Magic | null) => {
  if (await magic?.user.isLoggedIn()) {
    await magic?.user.logout();
  }
  localStorage.setItem('token', '');
  localStorage.setItem('user', '');
  setToken('');
};

export const saveToken = (token: string, setToken: Dispatch<SetStateAction<string>>, loginMethod: LoginMethod) => {
  localStorage.setItem('token', token);
  setToken(token);
  localStorage.setItem('isAuthLoading', 'false');
  localStorage.setItem('loginMethod', loginMethod);
};

export const getCurrencyValueText = (priceValue?: CurrencyValue) => {
  if (priceValue === undefined) return ''

  const priceDec = priceValue.price / 100

  return priceDec.toLocaleString("en-US", {
    style: "currency",
    currency: priceValue.currency,
    minimumFractionDigits: 0
  });
}

export const fetcherWithToken = async (args: [string, string]) => {
  const [url, token] = args

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(url, options).then((res) => res.json());
};

export function formatUTCDate(date: Date) {
  const pad = (num: number): string => num.toString().padStart(2, '0');

  const day = pad(date.getUTCDate());
  const month = pad(date.getUTCMonth() + 1); // getUTCMonth() returns 0-11
  const year = date.getUTCFullYear();

  let hours = date.getUTCHours();
  const minutes = pad(date.getUTCMinutes());
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  const hoursStr = hours ? pad(hours) : '12'; // the hour '0' should be '12'

  return `${day}.${month}.${year}, ${hoursStr}:${minutes} ${ampm}`;
}

export function setUTCDateTime(date: Date, h: number, m: number, s: number): Date {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), h, m ,s))
}

export function getDateWithoutTime(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function dateAddDays(date: Date, days: number): Date {
  return new Date(date.setDate(date.getDate() + days));
}