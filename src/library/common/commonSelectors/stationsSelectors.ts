import { createSelector } from 'reselect';
import { State } from 'main/mainReducer';

export const selectStations = createSelector(
  (state: State) => state.stations,
  ({ stations, isLoading, error }) => ({
    stations,
    isLoadingStations: isLoading,
    error
  })
);
