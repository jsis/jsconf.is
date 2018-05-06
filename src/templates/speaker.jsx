import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './speaker.module.scss';

import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';
import SpeakerCard from '../components/ui/SpeakerCard';
import SpeakerTalk from '../components/ui/SpeakerTalk';

const SpeakerPageTemplate = ({ data }) => {
  const {
    title,
    company,
    talk,
    photo,
    bio,
    website,
    github,
    twitter,
  } = data.markdownRemark.frontmatter;
  return (
    <DefaultLayout>
      <Page layout="speaker">
        <SpeakerCard name={title} company={company} imageSharp={photo.childImageSharp.sizes} />
        <hr className={styles.divider} />
        <SpeakerTalk title={talk} html={data.markdownRemark.html} />
        <hr className={styles.divider} />
        <h3>About {title}</h3>
        <p>{bio}</p>
        {(website || github || twitter) && (
          <Fragment>
            <h3>Find {title.split(' ')[0]} at:</h3>
            <ul className={styles.socials}>
              {website && (
                <li>
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {website.replace(/^(https?:)?\/\//, '')}
                  </a>
                </li>
              )}
              {twitter && (
                <li>
                  <a
                    href={`https://twitter.com/${twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    twitter.com/{twitter}
                  </a>
                </li>
              )}
              {github && (
                <li>
                  <a
                    href={`https://github.com/${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/{github}
                  </a>
                </li>
              )}
            </ul>
          </Fragment>
        )}
      </Page>
    </DefaultLayout>
  );
};

SpeakerPageTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default SpeakerPageTemplate;

export const query = graphql`
  query SpeakerTemplateQuery($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        talk
        company
        bio
        website
        github
        twitter
        photo {
          childImageSharp {
            sizes(maxWidth: 300) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
