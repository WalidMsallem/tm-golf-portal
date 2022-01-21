import React, { ReactElement } from 'react';
import Tooltip from '@mui/material/Tooltip';

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

export const parseSearchUrl = (url: string) =>
  JSON.parse(
    '{"' + decodeURI(url).replace(/^[?]/, '').replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
  );
