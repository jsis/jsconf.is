import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';
import PageTitle from '../components/ui/PageTitle';

const SecondPage = ({ data }) => (
  <DefaultLayout>
    <Page>
      <PageTitle title="Speakers" />

      <ul>
        {data.allSpeakersJson.edges.map(({ node }) => (
          <li key={node.slug}>
            <Link to={`/speakers/${node.slug}`} href={`/speakers/${node.slug}`}>
              {node.name}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  </DefaultLayout>
);

SecondPage.propTypes = {
  data: PropTypes.shape({
    allSpeakersJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default SecondPage;

export const query = graphql`
  query SpeakersPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSpeakersJson {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;
