import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchNetworks } from 'library/api';
import {
  fetchNetworksSuccess,
  fetchNetworksError
} from 'library/common/commonActions';
import { FetchNetworksTypes } from 'library/common/commonConstants';

function* fetchNetworksRequest() {
  try {
    const { data } = yield call(fetchNetworks);
    yield delay(500);
    yield put(fetchNetworksSuccess(data?.networks));
  } catch (error) {
    yield put(fetchNetworksError(error));
  }
}

export function* watchFetchNetworksRequest() {
  yield takeLatest(FetchNetworksTypes.FETCH_NETWORKS, fetchNetworksRequest);
}
