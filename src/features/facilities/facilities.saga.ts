import { takeEvery, put, call, all, delay } from 'redux-saga/effects';
// uncomplete this to switch to an external server
// import { AxiosResponse } from 'axios';
import {
  GetFacilitiesRequest,
  CreateFacilitieRequest,
  GetFacilitieByIdRequest,
  DeleteFacilitieRequest,
  UpdateFacilitieRequest,
  Facilitie,
  LoadMockDataRequest,
} from './facilities.types';
import {
  GET_FACILITIES,
  CREATE_FACILITIE,
  GET_FACILITIE_BY_ID,
  UPDATE_FACILITIE,
  DELETE_FACILITIE,
  LOAD_MOCK_DATA,
} from './facilities.actionTypes';
// uncomplete this to switch to an external server
// import * as api from './facilities.services';
import * as api from './facilities.localStorage.services';
import { CALL_LOCAL_STORAGE_DELAY } from '../../constants/global.constants';

export function* queryFacilities(action: GetFacilitiesRequest) {
  try {
    const queries = new URLSearchParams({ page: action.page, search: action.search, type: action.facilitietype }).toString();
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie[]> = yield call(api.queryFacilities, queries);
    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facilitie[] = yield call(api.queryFacilities, queries);

    yield put({
      type: GET_FACILITIES.success,
      facilitiesList: response,
    });
  } catch (e) {
    yield put({ type: GET_FACILITIES.failure, e });
  }
}
export function* createFacilitie(action: CreateFacilitieRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.createFacilitie, action.body);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facilitie = yield call(api.createFacilitie, action.body);

    yield put({
      type: CREATE_FACILITIE.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: CREATE_FACILITIE.failure, e });
  }
}
export function* getFacilitieById(action: GetFacilitieByIdRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.getFacilitieById, action.id);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facilitie = yield call(api.getFacilitieById, action.id);

    yield put({
      type: GET_FACILITIE_BY_ID.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: GET_FACILITIE_BY_ID.failure, e });
  }
}
export function* deleteFacilitie(action: DeleteFacilitieRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.deleteFacilitie, action.id);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facilitie = yield call(api.deleteFacilitie, action.id);

    yield put({
      type: DELETE_FACILITIE.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: DELETE_FACILITIE.failure, e });
  }
}
export function* updateFacilitie(action: UpdateFacilitieRequest) {
  try {
    // uncomplete this to switch to an external server
    // const response: AxiosResponse<Facilitie> = yield call(api.updateFacilitie, action.id, action.body);

    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facilitie = yield call(api.updateFacilitie, action.id, action.body);

    yield put({
      type: UPDATE_FACILITIE.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: UPDATE_FACILITIE.failure, e });
  }
}

export function* loadMockData(action: LoadMockDataRequest) {
  try {
    yield delay(CALL_LOCAL_STORAGE_DELAY);
    const response: Facilitie = yield call(api.loadMockData, action.data);
    yield put({
      type: LOAD_MOCK_DATA.success,
      facilitiesList: response,
    });
  } catch (e) {
    yield put({ type: LOAD_MOCK_DATA.failure, e });
  }
}

function* FacilitiesSaga() {
  yield all([
    takeEvery(GET_FACILITIES.request, queryFacilities),
    takeEvery(GET_FACILITIE_BY_ID.request, getFacilitieById),
    takeEvery(UPDATE_FACILITIE.request, updateFacilitie),
    takeEvery(DELETE_FACILITIE.request, deleteFacilitie),
    takeEvery(CREATE_FACILITIE.request, createFacilitie),
    takeEvery(LOAD_MOCK_DATA.request, loadMockData),
  ]);
}

export default FacilitiesSaga;
