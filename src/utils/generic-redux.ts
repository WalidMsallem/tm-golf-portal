export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const generateActionTypes = (root: string, prefix: string) => ({
  request: `${root}${prefix}_${REQUEST}`,
  success: `${root}${prefix}_${SUCCESS}`,
  failure: `${root}${prefix}_${FAILURE}`,
});
