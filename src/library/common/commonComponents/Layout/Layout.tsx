import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
          to='/'
          exact
        >
          Home
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
          to='/networks'
        >
          Networks
        </NavLink>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
