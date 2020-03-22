import { LikeStationTypes } from 'library/common/commonConstants';
import { IAction } from 'library/interfaces';

export interface LikedStationsState {
  likedStations: string[];
}

const INIT_STATE: LikedStationsState = {
  likedStations: []
};

export const likedStations = (state = INIT_STATE, action: IAction) => {
  switch (action.type) {
    case LikeStationTypes.LIKE_STATION:
      return {
        ...state,
        likedStations: [...state.likedStations, action.payload]
      };
    case LikeStationTypes.DISLIKE_STATION:
      return {
        ...state,
        likedStations: state.likedStations.filter(st => st !== action.payload)
      };
    default:
      return state;
  }
};
