import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 100%;
  position: relative;
  padding: 5px;
`
const PokeballRed = styled.div`
  background-color: red;
  position: absolute;
  top: 0;
  border: 2px solid #000;
  height: 40px;
  width: 80px;
  border-radius: 100% 100% 0 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`
const PokeballWhite = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  border: 2px solid #000;
  height: 40px;
  width: 80px;
  border-radius: 0 0 100% 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Pokeball = ({closeModal, isCaptured, pokemon}) => {
  return (
    <Wrapper>
      <PokeballRed/>
      <PokeballWhite/>
    </Wrapper>
  )
}

export default Pokeball