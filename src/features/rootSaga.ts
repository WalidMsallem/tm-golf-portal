import { all, fork } from 'redux-saga/effects';
import FacilitiesSaga from '../features/facilities/facilities.saga';

export default function* rootSaga() {
  yield all([fork(FacilitiesSaga)]);
}
