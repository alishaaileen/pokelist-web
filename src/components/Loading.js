import React from 'react'
import styled from '@emotion/styled'
import Pokeball from './Pokeball'

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

const ModalCatchPokemon = ({closeModal, isCaptured, pokemon}) => {
  return (
    <Wrapper>
      <Overlay className="overlay display-flex-centered">
        <Pokeball />
      </Overlay>
    </Wrapper>
  )
}

export default ModalCatchPokemon