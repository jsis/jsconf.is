import React from 'react';
import PropTypes from 'prop-types';

import styles from './MarkdownContent.module.scss';

const MarkdownContent = ({ html }) => (
  <div
    className={styles.root}
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
);

MarkdownContent.propTypes = {
  html: PropTypes.string.isRequired,
};

export default MarkdownContent;
