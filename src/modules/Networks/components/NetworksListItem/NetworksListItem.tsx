import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { Network } from 'library/interfaces';

interface Props {
  network: Network;
  style: Object;
}

const NetworksListItem = ({ network, style }: Props) => {
  return (
    <div style={style} className={styles.item}>
      <NavLink
        to={`/networks/${network.id}`}
        className={styles.link}
        activeClassName={styles.activeNavLink}
      >
        {network.name}
      </NavLink>
    </div>
  );
};

export default NetworksListItem;
