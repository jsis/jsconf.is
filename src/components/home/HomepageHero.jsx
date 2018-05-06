import React from 'react';
import PropTypes from 'prop-types';

const HomepageHero = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

HomepageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HomepageHero;
