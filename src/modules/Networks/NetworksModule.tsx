import React from 'react';
import styles from './networksStyles.module.scss';
import NetworksList from './components/NetworksList/NetworksList';
import StationsList from './components/StationsList/StationsList';
import { Network, Station, INetworkSummary } from 'library/interfaces';
import NetworkSummary from './components/NetworkSummary/NetworkSummary';

interface Props {
  networks: Network[];
  stations: Station[];
  likedStations: string[];
  isLoadingNetworks: boolean;
  isLoadingStations: boolean;
  summary: INetworkSummary;
  likeStationHandler: (stationId: string, newState: boolean) => void;
}

const NetworksModule = ({
  networks,
  stations,
  likedStations,
  summary,
  isLoadingNetworks,
  isLoadingStations,
  likeStationHandler
}: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Networks Page</h1>
      <NetworkSummary
        summary={summary}
        isLoading={isLoadingNetworks || isLoadingStations}
      />
      <div className={styles.lists}>
        <h3 className={`${styles.listTitle} ${styles.networksTitle}`}>
          Networks
        </h3>
        <div className={styles.networks}>
          <NetworksList networks={networks} isLoading={isLoadingNetworks} />
        </div>
        <h3 className={`${styles.listTitle} ${styles.stationsTitle}`}>
          Stations
        </h3>
        <div className={styles.stations}>
          <StationsList
            stations={stations}
            likedStations={likedStations}
            isLoading={isLoadingStations}
            likeStationHandler={likeStationHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default NetworksModule;
