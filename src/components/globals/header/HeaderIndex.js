import React from "react"
import styled from "styled-components"

const HeaderIndex = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  height: 80vh;
  background: url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default HeaderIndex
