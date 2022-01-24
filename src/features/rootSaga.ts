import { all, fork } from 'redux-saga/effects';
import FacilitiesSaga from './facilities/facilities.saga';

export default function* rootSaga() {
  yield all([fork(FacilitiesSaga)]);
}
