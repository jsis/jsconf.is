import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from './SpeakerCard.module.scss';

const SpeakerCard = ({ name, company, imageSharp }) => (
  <header className={styles.root}>
    {imageSharp && <Img outerWrapperClassName={styles.image} alt={name} sizes={imageSharp} />}
    <div className={styles.inner}>
      <h1 className={styles.title}>{name}</h1>
      {company && <p className={styles.subtitle}>{company}</p>}
    </div>
  </header>
);

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string,
  imageSharp: PropTypes.shape({}),
};

SpeakerCard.defaultProps = {
  company: null,
  imageSharp: null,
};

export default SpeakerCard;
