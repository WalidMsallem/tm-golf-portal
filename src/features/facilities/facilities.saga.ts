import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as api from './facilities.services';
import {
  GetFacilitiesRequest,
  CreateFacilitieRequest,
  GetFacilitieByIdRequest,
  DeleteFacilitieRequest,
  UpdateFacilitieRequest,
  Facilitie,
} from './facilities.types';
import {
  GET_FACILITIES,
  CREATE_FACILITIE,
  GET_FACILITIE_BY_ID,
  UPDATE_FACILITIE,
  DELETE_FACILITIE,
} from './facilities.actionTypes';
import { AxiosResponse } from 'axios';

export function* queryFacilities(action: GetFacilitiesRequest) {
  try {
    const response: AxiosResponse<Facilitie[]> = yield call(api.queryFacilities, action.query);
    yield put({
      type: GET_FACILITIES.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: GET_FACILITIES.failure, e });
  }
}
export function* createFacilitie(action: CreateFacilitieRequest) {
  try {
    const response: AxiosResponse<Facilitie> = yield call(api.createFacilitie, action.body);
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
    const response: AxiosResponse<Facilitie> = yield call(api.getFacilitieById, action.id);
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
    const response: AxiosResponse<Facilitie> = yield call(api.deleteFacilitie, action.id);
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
    const response: AxiosResponse<Facilitie> = yield call(api.updateFacilitie, action.id, action.body);
    yield put({
      type: UPDATE_FACILITIE.success,
      data: response,
    });
  } catch (e) {
    yield put({ type: UPDATE_FACILITIE.failure, e });
  }
}

function* FacilitiesSaga() {
  yield all([
    takeEvery(GET_FACILITIES.request, queryFacilities),
    takeEvery(GET_FACILITIE_BY_ID.request, getFacilitieById),
    takeEvery(UPDATE_FACILITIE.request, updateFacilitie),
    takeEvery(DELETE_FACILITIE.request, deleteFacilitie),
    takeEvery(CREATE_FACILITIE.request, createFacilitie),
  ]);
}

export default FacilitiesSaga;
