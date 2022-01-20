/* eslint-disable  @typescript-eslint/no-explicit-any  */

export const requestHeader = (options: object | null, overrideToken?: string | any): object => {
  return {
    headers: {
      // laod token here
      // Authorization: `Bearer ${token}`,
      ...options,
    },
  };
};

export const requestHeaderWithoutToken = (options: object | null): object => ({
  headers: {
    ...options,
  },
});
