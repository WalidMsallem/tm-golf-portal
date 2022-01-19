import produce from 'immer';
import { FacilitiesActions, FacilitiesState } from './facilities.types';

// The initial state of the reducer
export const initialState: FacilitiesState = {
  // For external data
  data: {},
  // For local data
  local: {
    loading: {},
    errors: {},
  },
};

const facilitiesReducer = (state: FacilitiesState = initialState, action: FacilitiesActions): FacilitiesState =>
  produce(state, (draft) => {
    switch (action.type) {
    }
  });

export default facilitiesReducer;
