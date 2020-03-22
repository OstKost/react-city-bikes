import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Network } from 'library/interfaces';
import ListLoader from 'library/common/commonComponents/ListLoader/ListLoader';
import ListEmpty from 'library/common/commonComponents/ListEmpty/ListEmpty';
import styles from './styles.module.scss';
import NetworksListItem from '../NetworksListItem/NetworksListItem';

interface Props {
  networks: Network[];
  isLoading: boolean;
}

const NetworksList = ({ networks, isLoading }: Props) => {
  if (!networks.length && isLoading) {
    return <ListLoader />;
  }

  if (!networks.length && !isLoading) {
    return <ListEmpty />;
  }

  return (
    <div className={styles.list}>
      <AutoSizer>
        {({ height, width }: any) => (
          <List
            width={width}
            height={height}
            itemSize={41}
            itemCount={networks.length}
          >
            {({ index, style }: any) => (
              <NetworksListItem network={networks[index]} style={style} />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default NetworksList;
