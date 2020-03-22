import React from 'react';
import { Station } from 'library/interfaces';
import ListLoader from 'library/common/commonComponents/ListLoader/ListLoader';
import ListEmpty from 'library/common/commonComponents/ListEmpty/ListEmpty';
import StationsListItem from '../StationsListItem/StationsListItem';
import styles from './styles.module.scss';

interface Props {
  stations: Station[];
  likedStations: string[];
  isLoading: boolean;
  likeStationHandler: (stationId: string, newState: boolean) => void;
}

const StationsList = ({
  stations,
  likedStations,
  isLoading,
  likeStationHandler
}: Props) => {
  if (isLoading) {
    return <ListLoader />;
  }

  if (!stations.length && !isLoading) {
    return <ListEmpty message='This network has no stations =(' />;
  }

  return (
    <ul className={styles.list}>
      {stations.map(station => (
        <StationsListItem
          key={station.id}
          station={station}
          isLiked={likedStations.some(id => id === station.id)}
          likeStationHandler={likeStationHandler}
        />
      ))}
    </ul>
  );
};

export default StationsList;
