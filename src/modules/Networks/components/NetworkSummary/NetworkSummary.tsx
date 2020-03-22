import React from 'react';
import styles from './styles.module.scss';
import { INetworkSummary } from 'library/interfaces';

interface Props {
  summary: INetworkSummary;
  isLoading: boolean;
}

const NetworkSummary = ({ summary, isLoading }: Props) => {
  return (
    <div className={styles.container}>
      <h2>{summary.networkName}</h2>
      <p>
        <span>Total free bikes: </span>
        <span>{isLoading ? 'Calculating...' : summary.freeBikes}</span>
      </p>
    </div>
  );
};

export default NetworkSummary;
