import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';
import PageTitle from '../components/ui/PageTitle';
import MarkdownContent from '../components/layout/MarkdownContent';

const AboutPageTemplate = ({ data }) => (
  <DefaultLayout>
    <Page layout="about">
      <PageTitle
        title={data.site.siteMetadata.title}
        subtitle={data.site.siteMetadata.description}
      />
      <MarkdownContent html={data.markdownRemark.html} />
    </Page>
  </DefaultLayout>
);

AboutPageTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default AboutPageTemplate;

export const query = graphql`
  query AboutPageTemplateQuery($slug: String!) {
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
      }
    }
  }
`;
