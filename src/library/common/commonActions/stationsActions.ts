import { FetchStationsTypes } from 'library/common/commonConstants';
import { Station } from 'library/interfaces';

export const fetchStations = (id: string) => ({
  type: FetchStationsTypes.FETCH_STATIONS,
  payload: id
});

export const fetchStationsSuccess = (payload: Station[]) => ({
  type: FetchStationsTypes.FETCH_STATIONS_SUCCESS,
  payload
});

export const fetchStationsError = (error: Error) => ({
  type: FetchStationsTypes.FETCH_STATIONS_ERROR,
  payload: error.message
});
