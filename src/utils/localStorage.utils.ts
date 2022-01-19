// export const getStorageValue = (key: string, defaultValue: any) => {
//   // getting stored value
//   const saved: any = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial || defaultValue;
// };
import encryption from './encryption';

// function getStorageValue(key, defaultValue) {
//     // getting stored value
//     const saved = localStorage.getItem(key);
//     const initial = JSON.parse(saved);
//     return initial || defaultValue;
//   }

export const load = (key: string, defaultValue: any) => {
  if (!key) {
    return null;
  }

  try {
    const item = localStorage.getItem(key);
    if (!item) {
      encryptAndSave(key, defaultValue);
      return defaultValue;
    }
    return encryption.decrypt(JSON.parse(item)) || defaultValue;
  } catch (e) {
    console.error(e);
    return null;
  }
};

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

export const encryptAndSave = (key: string, value: string) => {
  if (!key) {
    return null;
  }

  try {
    const encryptedValue = encryption.encrypt(value);
    save(key, `"${encryptedValue}"`);
    return true;
  } catch (e) {
    console.log('e', e);
    return null;
  }
};
