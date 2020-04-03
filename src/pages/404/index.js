import React from "react"
import { Link } from 'gatsby';

import Layout from "components/Layout"
import SEO from "components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <h2>Nix hier!</h2>
    <p>Leider gibt's hier nichts. Was auch immer du gesucht hast existiert wohl nicht.</p>
    <Link to="/">Hier geht's zur Startseite.</Link>
  </Layout>
)

export default NotFoundPage
