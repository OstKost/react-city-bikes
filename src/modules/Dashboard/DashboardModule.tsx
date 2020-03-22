import React from 'react';
import { Link } from 'react-router-dom';
import styles from './dashboardStyles.module.scss';

const DashboardModule = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <h2>Welcome to my test City Bikes project</h2>
      <Link className={styles.link} to='/networks'>
        Go to Networks
      </Link>
    </div>
  );
};

export default DashboardModule;
