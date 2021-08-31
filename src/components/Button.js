import React from 'react'
import styled from '@emotion/styled'
import { color } from '../constants/style'
import { lightenDarkenColor } from '../utils'

const Button = ({
  width="auto",
  bgColor=color.grey,
  children,
  callbackFunc=()=> {return}
}) => {
  const StyledButton = styled.button`
    background-color: ${bgColor};
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 50px;
    width: ${width};
    &:hover {
      background-color: ${lightenDarkenColor(bgColor, -20)};
    }
  `

  return (
    <StyledButton onClick={() => callbackFunc()} >
      {children}
    </StyledButton>
  )
}

export default Button