import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Page.module.scss';

const Page = ({ children, layout }) => (
  <article className={classnames(styles.root, styles[layout])}>
    <div className={styles.inner}>{children}</div>
  </article>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(['home', 'page', 'about', 'speaker']),
};

Page.defaultProps = {
  layout: null,
};

export default Page;
