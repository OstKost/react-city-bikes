import { FetchNetworksTypes } from 'library/common/commonConstants';
import { Network } from 'library/interfaces';

export const fetchNetworks = () => ({
  type: FetchNetworksTypes.FETCH_NETWORKS,
  payload: null
});

export const fetchNetworksSuccess = (payload: Network[]) => ({
  type: FetchNetworksTypes.FETCH_NETWORKS_SUCCESS,
  payload
});

export const fetchNetworksError = (error: Error) => ({
  type: FetchNetworksTypes.FETCH_NETWORKS_ERROR,
  payload: error.message
});
