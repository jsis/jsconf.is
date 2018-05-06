import React from 'react';
import PropTypes from 'prop-types';

import styles from './SpeakerTalk.module.scss';
import MarkdownContent from '../layout/MarkdownContent';

const SpeakerTalk = ({ title, html }) => (
  <section className={styles.root}>
    <div className={styles.inner}>
      <h2 className={styles.title}>{title}</h2>
      <MarkdownContent html={html} />
    </div>
  </section>
);

SpeakerTalk.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default SpeakerTalk;
