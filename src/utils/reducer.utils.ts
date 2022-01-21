/* eslint-disable import/prefer-default-export */
import { toast } from 'react-toastify';

export const handleErrorMessage = (payload: object | any) => {
  let msg = '';
  try {
    if (payload.e && typeof payload.e === 'string') {
      msg = payload.e;
    } else if (payload.e.response) {
      msg = payload.e.response;
    } else {
      msg = payload.e.message;
    }
  } catch (e) {
    msg = 'Server error';
  }
  toast.error(msg, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return msg;
};
