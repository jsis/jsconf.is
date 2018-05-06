import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';
import PageTitle from '../components/ui/PageTitle';
import MarkdownContent from '../components/layout/MarkdownContent';

const PageTemplate = ({ data }) => (
  <DefaultLayout>
    <Page layout="page">
      <PageTitle title={data.markdownRemark.frontmatter.title} />
      <MarkdownContent html={data.markdownRemark.html} />
    </Page>
  </DefaultLayout>
);

PageTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
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
