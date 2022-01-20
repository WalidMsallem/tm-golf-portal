import React, { ReactElement } from 'react';
import Tooltip from '@mui/material/Tooltip';

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
  return `?${str.join('&')}`;
};

export const paramsToObject = (url: string) => {
  return JSON.parse(`{"${decodeURI(url).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);
};

// <Tooltip title="Add" placement="top-start">
// <Button>top-start</Button>
// </Tooltip>

export const hideLongText = (text: string, maxCharacters: number): ReactElement => {
  if (text.length <= maxCharacters) {
    return <span>{text} </span>;
  }
  return (
    <Tooltip title={text} placement="top-end">
      <span>{text.slice(0, maxCharacters)}</span>
    </Tooltip>
  );
};
