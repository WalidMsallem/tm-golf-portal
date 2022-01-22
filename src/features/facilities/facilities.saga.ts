import { takeEvery, put, call, all, delay } from 'redux-saga/effects';
// uncomplete this to switch to an external server
// import { AxiosResponse } from 'axios';
import {
  GetFacilitiesRequest,
  CreateFacilityRequest,
  GetFacilityByIdRequest,
  DeleteFacilitieRequest,
  UpdateFacilityRequest,
  Facility,
  LoadMockDataRequest,
  OpenCreateOrUpdateFacility,
} from './facilities.types';
import {
  GET_FACILITIES,
  CREATE_FACILITY,
  GET_FACILITY_BY_ID,
  UPDATE_FACILITY,
  DELETE_FACILITY,
  LOAD_MOCK_DATA,
  MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL,
} from './facilities.actionTypes';
import { getFacilityByIdRequest } from './facilities.actions';
// uncomplete this to switch to an external server
// import * as api from './facilities.services';
import * as api from './facilities.localStorage.services';
import { CALL_LOCAL_STORAGE_DELAY } from '../../constants/global.constants';

export function* queryFacilities(action: GetFacilitiesRequest) {
  try {
    const queries = new URLSearchParams({ page: action.page, search: action.search, type: action.facilityType }).toString();
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie[]> = yield call(api.queryFacilities, queries);
    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facility[] = yield call(api.queryFacilities, queries);

    yield put({
      type: GET_FACILITIES.success,
      facilitiesList: response,
    });
  } catch (e) {
    yield put({ type: GET_FACILITIES.failure, e });
  }
}
export function* createFacility(action: CreateFacilityRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.createFacility, action.body);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facility = yield call(api.createFacility, action.body);

    yield put({
      type: CREATE_FACILITY.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: CREATE_FACILITY.failure, e });
  }
}
export function* getFacilityById(action: GetFacilityByIdRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.getFacilityById, action.id);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facility = yield call(api.getFacilityById, action.id);

    yield put({
      type: GET_FACILITY_BY_ID.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: GET_FACILITY_BY_ID.failure, e });
  }
}
export function* deleteFacilitie(action: DeleteFacilitieRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.deleteFacilitie, action.id);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facility = yield call(api.deleteFacilitie, action.id);

    yield put({
      type: DELETE_FACILITY.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: DELETE_FACILITY.failure, e });
  }
}
export function* updateFacility(action: UpdateFacilityRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.updateFacility, action.id, action.body);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facility = yield call(api.updateFacility, action.id, action.body);

    yield put({
      type: UPDATE_FACILITY.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: UPDATE_FACILITY.failure, e });
  }
}

export function* loadMockData(action: LoadMockDataRequest) {
  try {
    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facility = yield call(api.loadMockData, action.data);
    yield put({
      type: LOAD_MOCK_DATA.success,
      facilitiesList: response,
    });
  } catch (e) {
    yield put({ type: LOAD_MOCK_DATA.failure, e });
  }
}
export function* manageCreateOrUpdateFacility(action: OpenCreateOrUpdateFacility) {
  try {
    if (action.id) {
      yield put(getFacilityByIdRequest(action.id));
    }
  } catch (e) {
    yield put({ type: LOAD_MOCK_DATA.failure, e });
  }
}

function* FacilitiesSaga() {
  yield all([
    takeEvery(GET_FACILITIES.request, queryFacilities),
    takeEvery(GET_FACILITY_BY_ID.request, getFacilityById),
    takeEvery(UPDATE_FACILITY.request, updateFacility),
    takeEvery(DELETE_FACILITY.request, deleteFacilitie),
    takeEvery(CREATE_FACILITY.request, createFacility),
    takeEvery(LOAD_MOCK_DATA.request, loadMockData),
    takeEvery(MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL, manageCreateOrUpdateFacility),
  ]);
}

export default FacilitiesSaga;
