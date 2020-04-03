import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/de';
import Home from 'components/Home/index.de.js';

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <Home data={data} />
  </Layout>
);

export const query = graphql`
  query IndexPageDeQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {langKey: {eq: "de"}}}) {
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
