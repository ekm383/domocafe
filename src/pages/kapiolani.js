import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"

const Kapiolani = () => (
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
        <Banner titleSmall="Kapiolani Menu"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ padding: "2rem 0rem" }}>
      <div
        id="zuppler-menu"
        data-channel-url="http://api.zuppler.com/v3/channels/domocafe.json"
        data-integration="domocafekapiolani"
        data-restaurant-id="7876"
        data-locale="en"
        data-item="simple"
        data-cart="simple"
        data-colors-background="#ffffff"
        data-colors-highContrast="#000000"
        data-colors-midContrast="#333333"
        data-colors-lowContrast="#999999"
        data-colors-brand="#c59d5f"
        data-colors-heroBackground="#9e5375"
        data-colors-heroContrast="#FFFFFF"
        data-fonts-heading="Oswald, helvetica, sans-serif"
        data-fonts-body="Open Sans, helvetica, sans-serif"
        data-fonts-deco="Open Sans, helvetica, sans-serif"
      >
        <div id="zloading">Please wait. Loading menu...</div>
      </div>
    </Section>
  </Layout>
)

export default Kapiolani
