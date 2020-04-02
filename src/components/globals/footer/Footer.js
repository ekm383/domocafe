import React, { Component } from "react"
import styled from "styled-components"
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
        <h4>Contact Information</h4>
        <div className="locationContainer">
          <div className="locationBox">
            <h6>Downtown</h6>
            <p>1016 Maunakea St, Honolulu, HI 96817</p>
            <p id="phone">(808) 587-8338</p>
            <p>Mon - Sat 9:00am - 6:00pm</p>
            <p>Sun 10:00am - 3:00pm</p>
          </div>
          <div className="locationBox">
            <h6>Kapiolani</h6>
            <p>1724 Kapiolani Blvd, Honolulu, HI 96814</p>
            <p id="phone">(808) 888-0288</p>
            <p>Mon - Sat 9:00am - 6:00pm</p>
            <p>Sun 10:00am - 3:00pm</p>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
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
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2rem 0rem;
  background: var(--gray);
  color: var(--white);
  .locationContainer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .locationBox {
    flex-basis: 30%;
    text-align: center;
    margin: 2rem 0rem;
  }
  h4 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1rem;
  }
  p,
  #phone {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
  .box {
    flex-basis: 46%;
    padding: 2rem;
  }
  a {
    color: var(--white);
    font-size: 2rem;

    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .locationContainer {
      flex-wrap: wrap;
    }
    #phone {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
    .box {
      flex-basis: 100%;
    }
    .locationBox {
      flex-basis: 90%;
      margin-top: 15px;
    }
  }
`

export default Footer
