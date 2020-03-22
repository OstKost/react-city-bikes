import { FetchStationsTypes } from 'library/common/commonConstants';
import { Station, IAction } from 'library/interfaces';

export interface StationsState {
  stations: Station[];
  isLoading: boolean;
  error: string | undefined;
}

const INIT_STATE: StationsState = {
  stations: [],
  isLoading: false,
  error: undefined
};

export const stations = (state = INIT_STATE, action: IAction) => {
  switch (action.type) {
    case FetchStationsTypes.FETCH_STATIONS:
      return { ...state, isLoading: true, error: undefined, stations: [] };
    case FetchStationsTypes.FETCH_STATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        stations: action.payload
      };
    case FetchStationsTypes.FETCH_STATIONS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
