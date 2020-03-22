import { createSelector } from 'reselect';
import { State } from 'main/mainReducer';

export const selectLikedStations = createSelector(
  (state: State) => state.likedStations,
  ({ likedStations }) => ({
    likedStations
  })
);
