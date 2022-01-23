import { toast, ToastOptions } from 'react-toastify';

export const IS_DUMMY_DATA_LOADED_KEY = 'IS_DUMMY_DATA_LOADED';
export const MODEL_NAME = 'FACILITIES';
export const CALL_LOCAL_STORAGE_DELAY = 2000;

export const LIMIT_ITEM_PER_PAGE = '10';

export const regExpMatchAll = /^((?!"").)*$/;

export const notificationPrimaryConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
