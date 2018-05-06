import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageTitle.module.scss';

const PageTitle = ({ title, subtitle }) => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  </header>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PageTitle.defaultProps = {
  subtitle: null,
};

export default PageTitle;
