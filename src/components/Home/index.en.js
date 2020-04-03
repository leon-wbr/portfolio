import React from 'react';

import Layout from "components/Layout"
import SEO from "components/seo"
import Preview from 'components/Preview';

import './Home.scss';

const IndexPage = ({ langKey, data }) => {
  const projects = data.allMarkdownRemark.nodes.reduce((obj, item, index) => {
    if (index % 2 === 0) {
      obj.even.push(item);
    } else {
      obj.odd.push(item);
    }

    return obj;
  }, { odd: [], even: [] });

  return (
    <Layout noHeader className={'Home'}  {...{ langKey }}>
      <SEO />
      <h1>My name is Leon.</h1>
      <div className={'Home__Grid'}>
        <div className={'Home__GridColumn Home__GridColumn--left'}>
          <p>Available as a full-service-human for everything ranging from websites, over print media and screenwriting, to short films or advertisements. With only your idea, we will create the finished product together.</p>
          {projects.odd.map(project => <Preview {...project} />)}
        </div>
        <div className={'Home__GridColumn Home__GridColumn--right'}>
          {projects.even.map(project => <Preview {...project} />)}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
