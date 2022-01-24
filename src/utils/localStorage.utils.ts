/* eslint-disable no-undef */
import encryption from './encryption';

export const save = (key: string, value: string) => {
  if (!key || !value) {
    return null;
  }

  try {
    return localStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
};

export const remove = (key: string) => {
  if (!key) {
    return null;
  }

  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return null;
  }
};

export const encryptAndSave = (key: string, value: unknown) => {
  if (!key) {
    return null;
  }

  try {
    const stringifyValue = JSON.stringify(value);
    const encryptedValue = encryption.encrypt(stringifyValue);
    save(key, encryptedValue);
    return true;
  } catch (e) {
    return null;
  }
};

export const load = (key: string, defaultValue: unknown): any => {
  if (!key) {
    return null;
  }

  try {
    const item = localStorage.getItem(key);
    if (!item) {
      encryptAndSave(key, defaultValue);
      return defaultValue;
    }
    return JSON.parse(encryption.decrypt(item)) || defaultValue;
  } catch (e) {
    // console.error(e);
    return null;
  }
};
