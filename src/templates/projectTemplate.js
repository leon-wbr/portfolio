import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/seo';

import './projectTemplate.scss';

export default function Template({ data }) {
  const {
    markdownRemark: {
      frontmatter,
      html,
    },
  } = data;

  return (
    <Layout smallHeader className={'Project'}>
      <SEO title={frontmatter.title} />
      <h2>{frontmatter.title}</h2>
      {frontmatter.videoId && (
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          marginBottom: '75px',
        }}>
          <div style={{
            position: 'relative',
            height: 0,
            paddingBottom: '56.25%',
          }}>
            <iframe
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              src={`https://www.youtube-nocookie.com/embed/${frontmatter.videoId}?autoplay=1&amp;color=white&amp;modestbranding=1&amp;rel=0`}
              title="Video Player"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true">
            </iframe>
          </div>
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        videoId
      }
    }
  }
`
