type SerializePaylod = {
  [key: string]: string;
};

export const serialize = function (obj: SerializePaylod): string {
  const str: string[] = [];
  Object.keys(obj).forEach((key) => {
    if (obj.prototype.hasOwnProperty.call(key, 'key')) {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  });
  //   for (const p in obj)
  //     if (obj.hasOwnProperty(p)) {
  //       str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
  //     }
  return `?${str.join('&')}`;
};

export const paramsToObject = (url: string) => {
  return JSON.parse(`{"${decodeURI(url).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);
};
