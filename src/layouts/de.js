import React from 'react';
import Layout from './index';

import messages from 'intl/messages/en';
import 'intl/locale-data/jsonp/de';

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);
