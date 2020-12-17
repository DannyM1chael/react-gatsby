import React from "react"
import Hero from "../components/Hero"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Dreamable destinations" />
    <Testimonials />
  </Layout>
)

export default IndexPage
