import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import MainWindow from "../components/main"
import SocialLinks from "../components/socialLinks"
import RightbarMail from "../components/rightbarMail"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Rama Lesmana" />
    <MainWindow />
    <SocialLinks />
    <RightbarMail />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Rama Lesmana" />

export default IndexPage
