import React, { ReactElement } from 'react';
import Tooltip from '@mui/material/Tooltip';

export const hideLongText = (text: string, maxCharacters: number): ReactElement => {
  if (text.length <= maxCharacters) {
    return <span>{text}</span>;
  }
  return (
    <Tooltip title={text} placement="top-end">
      <span>{text.slice(0, maxCharacters)}... </span>
    </Tooltip>
  );
};

export const isEmptySting = (str: string) => typeof str === 'string' && str.length === 0;

export function isValidJSONString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const parseSearchUrl = (url: string) => {
  const stringifyURL =
    '{"' + decodeURI(url).replace(/^[?]/, '').replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}';

  if (isValidJSONString(stringifyURL)) {
    return JSON.parse(stringifyURL);
  }
  return {};
};
