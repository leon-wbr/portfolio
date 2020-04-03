import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/en';
import Home from 'components/Home/index.en.js';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <Home {...props} />
  </Layout>
);

export const query = graphql`
  query IndexPageEnQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {langKey: {eq: "en"}} fileAbsolutePath: {regex: "/(projects)/.*\\\\.md$/"}}) {
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
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
