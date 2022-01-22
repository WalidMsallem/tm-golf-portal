import produce from 'immer';
import { toast } from 'react-toastify';
import {
  CREATE_FACILITY,
  DELETE_FACILITY,
  GET_FACILITIES,
  GET_FACILITY_BY_ID,
  LOAD_MOCK_DATA,
  UPDATE_FACILITY,
  MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL,
} from './facilities.actionTypes';
import { FacilitiesActions, FacilitiesState, Facility, CreateOrUpdateModalStatus } from './facilities.types';
import { handleErrorMessage } from '../../utils/reducer.utils';
import {
  load as loadFromLocalStorage,
  encryptAndSave as encryptAndSaveInLocalStorage,
} from '../../utils/localStorage.utils';
import { IS_DUMMY_DATA_LOADED_KEY } from '../../constants/global.constants';

const facilityInitialState: Facility = {
  id: '',
  createdAt: '',
  name: '',
  type: '',
  address: '',
};
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
    facility: facilityInitialState,
  },
  // For local data
  local: {
    loading: {
      fetchFacilities: false,
      createFacility: false,
      updateFacility: false,
      getFacilityById: false,
      deleteFacilityById: false,
    },
    errors: {
      fetchFacilities: '',
      createFacility: '',
      updateFacility: '',
      getFacilityById: '',
      deleteFacilityById: '',
    },
    modals: {
      openOrUpdateFacility: CreateOrUpdateModalStatus.close,
    },
  },
};

const facilitiesReducer = (state: FacilitiesState = initialState, action: FacilitiesActions): FacilitiesState =>
  produce(state, (draft) => {
    switch (action.type) {
      case MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL:
        draft.local.modals.openOrUpdateFacility = action.status;
        if (action.status === CreateOrUpdateModalStatus.close) {
          draft.data.facility = facilityInitialState;
        }
        break;
      // create Facility
      case CREATE_FACILITY.request:
        draft.local.loading.createFacility = true;
        draft.local.errors.createFacility = '';
        break;
      case CREATE_FACILITY.success:
        draft.local.loading.createFacility = false;
        draft.local.errors.createFacility = '';
        draft.data.facilities.results.unshift(action.data);
        draft.local.modals.openOrUpdateFacility = CreateOrUpdateModalStatus.close;
        toast.success(`Facility created`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case CREATE_FACILITY.failure:
        draft.local.loading.createFacility = false;
        draft.local.errors.createFacility = handleErrorMessage(action);
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
        draft.local.loading.fetchFacilities = false;
        draft.local.errors.fetchFacilities = '';
        draft.data.facilities = action.facilitiesList;
        encryptAndSaveInLocalStorage(IS_DUMMY_DATA_LOADED_KEY, true);
        break;

      case GET_FACILITIES.failure:
      case LOAD_MOCK_DATA.failure:
        draft.local.loading.fetchFacilities = false;
        draft.local.errors.fetchFacilities = handleErrorMessage(action);
        break;
      // get Facility by Id
      case GET_FACILITY_BY_ID.request:
        draft.local.loading.getFacilityById = true;
        draft.local.errors.getFacilityById = '';
        break;
      case GET_FACILITY_BY_ID.success:
        draft.local.loading.getFacilityById = false;
        draft.local.errors.getFacilityById = '';
        draft.data.facility = action.data;
        break;
      case GET_FACILITY_BY_ID.failure:
        draft.local.loading.getFacilityById = false;

        draft.local.errors.getFacilityById = handleErrorMessage(action);

        break;
      // update Facility by Id
      case UPDATE_FACILITY.request:
        draft.local.loading.updateFacility = true;
        draft.local.errors.updateFacility = '';
        break;
      case UPDATE_FACILITY.success:
        draft.local.loading.updateFacility = false;
        draft.local.errors.updateFacility = '';
        draft.data.facilities.results = state.data.facilities.results.map((element) => {
          if (action.data.id === element.id) {
            return action.data;
          }
          return element;
        });
        draft.local.modals.openOrUpdateFacility = CreateOrUpdateModalStatus.close;
        draft.data.facility = facilityInitialState;
        toast.success(`Facility updated`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case UPDATE_FACILITY.failure:
        draft.local.loading.updateFacility = false;
        draft.local.errors.updateFacility = handleErrorMessage(action);
        break;
      // delete Facility by Id
      case DELETE_FACILITY.request:
        draft.local.loading.deleteFacilityById = true;
        draft.local.errors.deleteFacilityById = '';
        break;
      case DELETE_FACILITY.success:
        draft.local.loading.deleteFacilityById = false;
        draft.local.errors.deleteFacilityById = '';
        draft.data.facilities.results = state.data.facilities.results.filter((element) => element.id !== action.id);
        break;
      case DELETE_FACILITY.failure:
        draft.local.loading.deleteFacilityById = false;
        draft.local.errors.deleteFacilityById = handleErrorMessage(action);

        break;
    }
  });

export default facilitiesReducer;
