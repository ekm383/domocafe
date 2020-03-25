import React, { Component } from "react"
import styled from "styled-components"
import map from "../../../images/bg/domo-cafe-hawaii-map.jpg"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <h4>Contact Information</h4>
          <div className="locationContainer">
            <div className="locationBox">
              <h6>Downtown</h6>
              <p>
                1016 Maunakea St,
                <br />
                Honolulu, HI 96817
              </p>
              <p id="phone">(808) 587-8338</p>
            </div>
            <div className="locationBox">
              <h6>Kapiolani</h6>
              <p>
                1724 Kapiolani Blvd,
                <br />
                Honolulu, HI 96814
              </p>
              <p id="phone">(808) 888-0288</p>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Mon - Sat 9:00am - 6:00pm</p>
            <p>Sun 10:00am - 3:00pm</p>
            {this.state.icons.map(item => (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="box map">
          <img src={map} alt="map" width="100%" height="100%" />
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--gray);
  color: var(--white);
  .locationContainer {
    display: flex;
  }
  .locationBox {
    flex-basis: 45%;
  }
  h4 {
    margin-bottom: 10px;
  }
  p,
  #phone {
    font-size: 12px !important;
    line-height: 1.3rem;
  }
  .box {
    flex-basis: 46%;
    padding: 2rem;
  }
  .map {
    background: lightgray;
    padding: 0;
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 6rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    #phone {
      font-size: 12px !important;
      line-height: 1.3rem;
    }
  }
`

export default Footer
