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