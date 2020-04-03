import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/en';
import Home from 'components/Home/index.en.js';

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <Home data={data} />
  </Layout>
);

export const query = graphql`
  query IndexPageEnQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {langKey: {eq: "en"}}}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          icon
          thumbnail {
            childImageSharp {
              fluid {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
