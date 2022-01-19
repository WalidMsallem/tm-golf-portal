type SerializePaylod = {
  [key: string]: string;
};

export const serialize = function (obj: SerializePaylod): string {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return `?${str.join('&')}`;
};

export const paramsToObject = (url: string) => {
  return JSON.parse('{"' + decodeURI(url).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};
