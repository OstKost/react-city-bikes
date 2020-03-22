import { combineReducers } from 'redux';
import {
  networks,
  NetworksState,
  stations,
  StationsState,
  likedStations,
  LikedStationsState
} from 'library/common/commonReducers';

export interface State {
  networks: NetworksState;
  stations: StationsState;
  likedStations: LikedStationsState;
}

export const mainReducer = combineReducers<State>({
  networks,
  stations,
  likedStations
});
