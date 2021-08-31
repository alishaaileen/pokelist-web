import React from 'react'
import styled from '@emotion/styled'
import ResponsiveImg from './ResponsiveImg'
import PokeballImage from '../assets/images/pokeball.svg'
import { keyframes } from '@emotion/react'

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`
const Overlay = styled.div`
  background-color: #00000099;
  width: 100%;
  height: 100%;
  position: fixed;
`
const RotateInfinite = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const ImageWrapper = styled.div`
  background-color: #fff;
  width: 50px;
  height: 50px;
  border: 10px solid #fff;
  border-radius: 50%;
  animation: ${RotateInfinite} 2s linear infinite;
`

const ModalCatchPokemon = () => {
  return (
    <Wrapper>
      <Overlay className="overlay display-flex-centered">
        <ImageWrapper>
          <ResponsiveImg src={PokeballImage} />
        </ImageWrapper>
      </Overlay>
    </Wrapper>
  )
}

export default ModalCatchPokemon