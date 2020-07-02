import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
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
          titleSmall="Sushi • Poke • Sashimi"
          subtitle="From the daily fish auction to your belly!"
        ></Banner>
      </Section>
    </HeaderIndex>
    <Section id="locations" style={{ marginTop: "2rem" }}>
      <LocationBox
        name="Downtown"
        address="1016 Maunakea St,
        Honolulu, HI 96817"
        phone="(808) 587-8338"
        hours1="Mon - Sat 9:00am - 6:00pm"
        hours2="Sun 10:00am - 3:00pm"
        link="https://www.grindztogo.com/order/restaurant/domo-cafe-downtown-menu/13"
      />
      <LocationBox
        name="Kapiolani"
        address="1726 Kapiolani Blvd 102,
        Honolulu, HI 96814"
        phone="(808) 888-0288"
        hours1="Mon - Sat 11:00am - 9:00pm"
        hours2="Sun 11:00am - 3:00pm"
        link="https://www.grindztogo.com/order/restaurant/domo-cafe-kapiolani-menu/14
        "
      />
    </Section>
    <Section id="information" style={{ marginTop: "2rem" }}>
      <Intro heading="how can we help?" />
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
