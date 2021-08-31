import React from 'react'
import styled from '@emotion/styled'
import { color } from '../constants/style'
import { lightenDarkenColor } from '../utils'

const Button = ({btnText, btnTextColor=color.white, bgColor=color.grey, callbackFunc=()=> {return}}) => {
  const StyledButton = styled.button`
    background-color: ${bgColor};
    color: ${btnTextColor};
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 50px;
    &:hover {
      background-color: ${lightenDarkenColor(bgColor, -20)};
    }
  `
  const StyledBtnText = styled.h2`
    color: ${btnTextColor};
    margin: 0;
  `

  return (
    <StyledButton
      onClick={() => callbackFunc()}
    >
      <StyledBtnText>{btnText}</StyledBtnText>
    </StyledButton>
  )
}

export default Button