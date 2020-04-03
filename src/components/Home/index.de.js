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
    <Layout noHeader className={'Home'} {...{ langKey }}>
      <SEO />
      <h1>Mein Name ist Leon.</h1>
      <div className={'Home__Grid'}>
        <div className={'Home__GridColumn Home__GridColumn--left'}>
          <p>Als Full-Service-Mensch für alles von Webseiten, über Printmedien und Drehbücher, bis zu Kurz- und Werbefilmen zu gebrauchen. Mit Ihrer Idee erschaffen wir gemeinsam das fertige Produkt.</p>
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
