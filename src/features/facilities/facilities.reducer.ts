import produce from 'immer';
import {
  CREATE_FACILITIE,
  DELETE_FACILITIE,
  GET_FACILITIES,
  GET_FACILITIE_BY_ID,
  LOAD_MOCK_DATA,
  UPDATE_FACILITIE,
} from './facilities.actionTypes';
import { FacilitiesActions, FacilitiesState } from './facilities.types';
import { handleErrorMessage } from '../../utils/reducer.utils';
import {
  load as loadFromLocalStorage,
  encryptAndSave as encryptAndSaveInLocalStorage,
} from '../../utils/localStorage.utils';

const IS_DUMMY_DATA_LOADED_KEY = 'IS_DUMMY_DATA_LOADED';

// The initial state of the reducer
export const initialState: FacilitiesState = {
  // For external data
  data: {
    facilities: {
      limit: 10,
      page: 1,
      totalPages: 0,
      results: [],
      totalResults: 0,
    },
    facilitie: {},
  },
  // For local data
  local: {
    loading: {
      fetchFacilities: false,
      createFacilitie: false,
      updateFacilitie: false,
      getFacilitieById: false,
      deleteFacilitieById: false,
    },
    errors: {
      fetchFacilities: '',
      createFacilitie: '',
      updateFacilitie: '',
      getFacilitieById: '',
      deleteFacilitieById: '',
    },
    isDummyDataLoaded: loadFromLocalStorage(IS_DUMMY_DATA_LOADED_KEY, false) === true,
  },
};

const facilitiesReducer = (state: FacilitiesState = initialState, action: FacilitiesActions): FacilitiesState =>
  produce(state, (draft) => {
    switch (action.type) {
      // create Facilitie
      case CREATE_FACILITIE.request:
        draft.local.loading.createFacilitie = true;
        draft.local.errors.createFacilitie = '';
        break;
      case CREATE_FACILITIE.success:
        draft.local.loading.createFacilitie = false;
        draft.local.errors.createFacilitie = '';
        draft.data.facilities.results.unshift(action.data);
        break;
      case CREATE_FACILITIE.failure:
        draft.local.loading.createFacilitie = false;
        draft.local.errors.createFacilitie = handleErrorMessage(action);

        break;
      // load mock data
      // get all Facilities
      case GET_FACILITIES.request:
      case LOAD_MOCK_DATA.request:
        draft.local.loading.fetchFacilities = true;
        draft.local.errors.fetchFacilities = '';
        break;
      case GET_FACILITIES.success:
        draft.local.loading.fetchFacilities = false;
        draft.local.errors.fetchFacilities = '';
        draft.data.facilities = action.facilitiesList;
        break;
      case LOAD_MOCK_DATA.success:
        console.log('action.facilitiesList', action);

        draft.local.loading.fetchFacilities = false;
        draft.local.errors.fetchFacilities = '';
        draft.data.facilities = action.facilitiesList;
        encryptAndSaveInLocalStorage(IS_DUMMY_DATA_LOADED_KEY, true);
        draft.local.isDummyDataLoaded = true;
        break;
      case GET_FACILITIES.failure:
      case LOAD_MOCK_DATA.failure:
        draft.local.loading.fetchFacilities = false;
        try {
          draft.local.errors.fetchFacilities = handleErrorMessage(action);
        } catch (e) {
          draft.local.errors.fetchFacilities = 'Server error';
        }
        break;
      // get Facilitie by Id
      case GET_FACILITIE_BY_ID.request:
        draft.local.loading.getFacilitieById = true;
        draft.local.errors.getFacilitieById = '';
        break;
      case GET_FACILITIE_BY_ID.success:
        draft.local.loading.getFacilitieById = false;
        draft.local.errors.getFacilitieById = '';
        draft.data.facilitie = action.data;
        break;
      case GET_FACILITIE_BY_ID.failure:
        draft.local.loading.getFacilitieById = false;
        try {
          draft.local.errors.getFacilitieById = handleErrorMessage(action);
        } catch (e) {
          draft.local.errors.getFacilitieById = 'Server error';
        }
        break;
      // update Facilitie by Id
      case UPDATE_FACILITIE.request:
        draft.local.loading.updateFacilitie = true;
        draft.local.errors.updateFacilitie = '';
        break;
      case UPDATE_FACILITIE.success:
        draft.local.loading.updateFacilitie = false;
        draft.local.errors.updateFacilitie = '';
        draft.data.facilities.results = state.data.facilities.results.map((element) => {
          if (action.data.id === element.id) {
            return action.data;
          }
          return element;
        });
        break;
      case UPDATE_FACILITIE.failure:
        draft.local.loading.updateFacilitie = false;
        try {
          draft.local.errors.updateFacilitie = handleErrorMessage(action);
        } catch (e) {
          draft.local.errors.updateFacilitie = 'Server error';
        }
        break;
      // delete Facilitie by Id
      case DELETE_FACILITIE.request:
        draft.local.loading.deleteFacilitieById = true;
        draft.local.errors.deleteFacilitieById = '';
        break;
      case DELETE_FACILITIE.success:
        draft.local.loading.deleteFacilitieById = false;
        draft.local.errors.deleteFacilitieById = '';
        draft.data.facilities.results = state.data.facilities.results.filter((element) => element.id !== action.id);
        break;
      case DELETE_FACILITIE.failure:
        draft.local.loading.deleteFacilitieById = false;
        try {
          draft.local.errors.deleteFacilitieById = handleErrorMessage(action);
        } catch (e) {
          draft.local.errors.deleteFacilitieById = 'Server error';
        }
        break;
    }
  });

export default facilitiesReducer;
