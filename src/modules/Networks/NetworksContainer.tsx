import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { INetworkSummary, Station, Network } from 'library/interfaces';
import NetworksModule from './NetworksModule';
import {
  selectNetworks,
  selectStations,
  selectLikedStations
} from 'library/common/commonSelectors';
import {
  fetchNetworks,
  fetchStations,
  toggleLikeStations
} from 'library/common/commonActions';

const NetworksContainer = () => {
  const dispatch = useDispatch();
  const { networkId: id } = useParams();
  const networksState = useSelector(selectNetworks);
  const stationsState = useSelector(selectStations);
  const likedStationsState = useSelector(selectLikedStations);

  const networkToFind = id ?? networksState.networks[0]?.id ?? '';

  const fetchNetworksHandler = useCallback(async () => {
    await dispatch(fetchNetworks());
  }, [dispatch]);

  const fetchStationsHandler = useCallback(async () => {
    await dispatch(fetchStations(networkToFind));
  }, [dispatch, networkToFind]);

  useEffect(() => {
    fetchNetworksHandler();
  }, [fetchNetworksHandler]);

  useEffect(() => {
    fetchStationsHandler();
  }, [fetchStationsHandler]);

  useEffect(() => {}, []);

  const likeStationHandler = (stationId: string, newState: boolean) => {
    dispatch(toggleLikeStations(stationId, newState));
  };

  const getNetworkName = (list: Network[], ntwId: string | undefined) => {
    if (!list.length) {
      return 'Loading...';
    }
    if (ntwId) {
      return list.find(ntw => ntw.id === ntwId)?.name || '';
    }
    return list[0].name;
  };

  const getTotalFreeBikes = (list: Station[]) => {
    return list.reduce((acc, station) => acc + station.free_bikes ?? 0, 0);
  };

  const summary: INetworkSummary = {
    networkName: getNetworkName(networksState.networks, networkToFind),
    freeBikes: getTotalFreeBikes(stationsState.stations)
  };

  return (
    <NetworksModule
      {...networksState}
      {...stationsState}
      {...likedStationsState}
      summary={summary}
      likeStationHandler={likeStationHandler}
    />
  );
};

export default NetworksContainer;
