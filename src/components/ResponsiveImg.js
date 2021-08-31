import React from 'react'
import styled from'@emotion/styled'

const ResponsiveImg = ({ src }) => {
  const Image = styled.img`
    width: 100%;
    height: inherit;
    object-fit: cover;
    object-position: bottom;
    margin: 0 auto;
  `

  return (
    <Image src={src} />
  )
}

export default ResponsiveImg