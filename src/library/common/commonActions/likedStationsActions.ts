import { LikeStationTypes } from 'library/common/commonConstants';

export const toggleLikeStations = (id: string, newState: boolean) => ({
  type: newState
    ? LikeStationTypes.LIKE_STATION
    : LikeStationTypes.DISLIKE_STATION,
  payload: id
});
