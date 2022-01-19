
export const handleErrorMessage = (payload: object | any) => {
  try {
    if (!payload.e.response) {
      return payload.e.message;
    }
    return payload.e.response;
  } catch (e) {
    return 'Server error';
  }
};
