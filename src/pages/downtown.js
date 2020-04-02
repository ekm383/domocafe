import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import DowntownMenu from "../components/DowntownMenu"

const Downtown = () => (
  <Layout>
    <SEO
      title="Home"
      description="Domo Cafe is located on Maunakea Street in Downtown Honolulu. We are open daily serving the best ahi poke and sushi.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Downtown Honolulu Restaurant`,
        `Hawaii Restaurant`,
        `Hawaii Local Food`,
        `Honolulu Takeout`,
        `Honolulu Poke`,
        `Honolulu Sushi`,
      ]}
    />
    <HeaderIndex>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner titleSmall="Downtown Menu"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ margin: "0rem auto", padding: "2rem 0rem" }}>
      <DowntownMenu />
    </Section>
  </Layout>
)

export default Downtown
