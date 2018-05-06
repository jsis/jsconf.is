import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';
// import HomepageHero from '../components/home/HomepageHero';
// import MeshBlock from '../components/ui/MeshBlock';

import styles from './index.module.scss';

const IndexPage = ({ data }) => (
  <DefaultLayout>
    <Page layout="home">
      <div className={styles.wrapper}>
        <div className={styles.eventName}>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
        </div>
        <div className={styles.details}>
          <ul>
            <li>
              <Link to="/about" href="/about">
                About
              </Link>
            </li>
            <li>Schedule</li>
            <li>
              <Link to="/venue" href="/venue">
                Venue
              </Link>
            </li>
            <li>
              <Link to="/speakers" href="/speakers">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/code-of-conduct" href="/code-of-conduct">
                Code of Conduct
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quisquam neque nihil
            aspernatur voluptate necessitatibus.
          </p>
          <p>
            Quae deleniti cumque cupiditate culpa architecto, amet debitis. Accusantium odit eaque
            debitis tempora deleniti et.
          </p>
        </div>
        <div className={styles.cta}>
          <ul>
            <li>
              <Link to="/about" href="/about">
                Learn more
              </Link>
            </li>
            <li>
              <Link to="/" href="/">
                Call for Submissions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  </DefaultLayout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
  }
`;
