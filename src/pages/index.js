import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import LocationBox from "../components/LocationBox"
import Intro from "../components/Intro"

const IndexPage = () => (
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
        <Banner
          titleSmall="DOMO CAFE"
          subtitle="Domo Cafe is located at Honolulu. We aim at serving the best sushi at the affordable price. Our team go to fish auction to get the best quality ahi and it's the freshest you can get !"
        >
          <AniLink fade to="#locations">
            <Button>ORDER TAKEOUT</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="locations" style={{ marginTop: "2rem" }}>
      <LocationBox
        name="Downtown"
        address="1016 Maunakea St,
        Honolulu, HI 96817"
        phone="(808) 587-8338"
        hours1="Mon - Sun 10:30am - 9:00pm"
        link="/downtown"
      />
      <LocationBox
        name="Kapiolani"
        address="1726 Kapiolani Blvd 102,
        Honolulu, HI 96814"
        phone="(808) 888-0288"
        hours1="Mon - Sun 10:30am - 9:00pm"
        link="/kapiolani"
      />
    </Section>
    <Section id="information" style={{ marginTop: "2rem" }}>
      <Intro heading="how can we help?" />
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
