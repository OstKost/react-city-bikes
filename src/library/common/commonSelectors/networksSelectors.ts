import { createSelector } from 'reselect';
import { State } from 'main/mainReducer';

export const selectNetworks = createSelector(
  (state: State) => state.networks,
  ({ networks, isLoading, error }) => ({
    networks,
    isLoadingNetworks: isLoading,
    error
  })
);
