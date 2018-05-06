import React from 'react';
import Link from 'gatsby-link';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <Link
        to="/"
        href="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src="https://via.placeholder.com/50x50" alt="" />
      </Link>
      <nav className={styles.headerNav}>
        <Link to="/" href="/">
          One link
        </Link>
        <Link to="/" href="/">
          Two link
        </Link>
        <Link to="/" href="/">
          Three link
        </Link>
        <Link to="/" href="/">
          Four link
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
