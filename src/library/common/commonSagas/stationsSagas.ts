import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchStations } from 'library/api';
import {
  fetchStationsSuccess,
  fetchStationsError
} from 'library/common/commonActions';
import { FetchStationsTypes } from 'library/common/commonConstants';
import { IAction } from 'library/interfaces';

function* fetchStationsRequest(action: IAction) {
  try {
    const { data } = yield call(() => fetchStations(action.payload));
    yield delay(500);
    yield put(fetchStationsSuccess(data?.network?.stations));
  } catch (error) {
    yield put(fetchStationsError(error));
  }
}

export function* watchFetchStationsRequest() {
  yield takeLatest(FetchStationsTypes.FETCH_STATIONS, fetchStationsRequest);
}
