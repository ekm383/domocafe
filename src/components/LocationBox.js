import React from "react"
import styled from "styled-components"
import Background from "../components/Background"

const LocationBox = ({
  name,
  address,
  addressLink,
  phone,
  hours1,
  hours2,
  hours3,
  link,
}) => {
  return (
    <Background>
      <LocationWrapper>
        <div>
          <h4>{name}</h4>
          <p>
            <a href={addressLink}>{address}</a>
          </p>
          <p>{phone}</p>
          <p>{hours1}</p>
          <p>{hours2}</p>
          <p>{hours3}</p>
          <a href={link}>
            <button className="menuButton">Order</button>
          </a>
        </div>
      </LocationWrapper>
    </Background>
  )
}

const LocationWrapper = styled.div`
  flex-wrap: wrap;
  text-align: center;
  margin: 0rem auto;
  color: var(--darkGray);
  h4 {
    color: var(--mainColor);
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  p {
    font-size: 1rem;
    color: var(--darkGray);
    a {
      color: #000000;
      font-weight: bold;
    }
  }
  .menuButton {
    padding: 0.75rem 1rem;
    margin-top: 1rem;
    border: 1px solid white;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: var(--mainColor);
    color: white;
    transition: ease-in 200ms;
    &:hover {
      background: none;
      border: 1px solid var(--mainColor);
      color: var(--mainColor);
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    h4 {
      color: var(--mainColor);
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
  }
`

export default LocationBox
