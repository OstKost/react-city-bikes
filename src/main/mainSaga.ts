import { all, fork } from 'redux-saga/effects';
import {
  watchFetchNetworksRequest,
  watchFetchStationsRequest
} from 'library/common/commonSagas';

export const mainSaga = function* root() {
  yield all([fork(watchFetchNetworksRequest), fork(watchFetchStationsRequest)]);
};
