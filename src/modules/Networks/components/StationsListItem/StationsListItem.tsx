import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './styles.module.scss';
import { Station } from 'library/interfaces';

interface Props {
  station: Station;
  isLiked: boolean;
  likeStationHandler: (stationId: string, newState: boolean) => void;
}

const StationsListItem = ({ station, isLiked, likeStationHandler }: Props) => {
  return (
    <li className={styles.item}>
      {`${station.name} (Free bikes: ${station.free_bikes ?? 0})`}
      <button
        className={styles.likeButton}
        onClick={() => likeStationHandler(station.id, !isLiked)}
        type='button'
      >
        <FaHeart size='1.3em' color={isLiked ? 'red' : 'black'} />
      </button>
    </li>
  );
};

export default StationsListItem;
