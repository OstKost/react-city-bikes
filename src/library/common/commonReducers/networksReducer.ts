import { Network, IAction } from 'library/interfaces';
import { FetchNetworksTypes } from 'library/common/commonConstants';

export interface NetworksState {
  networks: Network[];
  isLoading: boolean;
  error: string | undefined;
}

const INIT_STATE: NetworksState = {
  networks: [],
  isLoading: false,
  error: undefined
};

export const networks = (state = INIT_STATE, action: IAction) => {
  switch (action.type) {
    // Networks
    case FetchNetworksTypes.FETCH_NETWORKS:
      return { ...state, isLoading: true, error: undefined };
    case FetchNetworksTypes.FETCH_NETWORKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        networks: action.payload
      };
    case FetchNetworksTypes.FETCH_NETWORKS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
