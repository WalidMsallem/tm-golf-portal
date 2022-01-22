import produce from 'immer';
import { LanguagesState, LanguagesActions } from './languages.types';
import { CHANGE_LOCALE } from './languages.actionTypes';

export const initialState: LanguagesState = {
  locale: '',
};

const languagesReducer = (state: LanguagesState = initialState, action: LanguagesActions): LanguagesState =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });

export default languagesReducer;
