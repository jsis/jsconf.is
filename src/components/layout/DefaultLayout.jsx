import React from 'react';
import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => <main className={styles.root}>{children}</main>;

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
