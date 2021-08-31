import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import TypeList from '../components/TypeList'

const shadowHover = keyframes`
    from {
      box-shadow: none;
    }
    to {
      transform: translate(0, -10px);
      box-shadow: 0 10px 10px #00000050;
    }
  `
const PokemonCardDiv = styled.div`
    background-color: #f5f5f599;
    padding: 16px;
    margin: 10px 0;
    border-radius: 10px;
    &:hover {
      animation: ${shadowHover} 0.1s ease forwards;
    }
  `
const PokemonName = styled.h3`
    margin: 10px auto;
    padding: 0;
    text-transform: capitalize;
    text-align: center;
  `
const PokemonNickname = styled.h4`
  margin: 10px auto;
  padding: 0;
  text-transform: capitalize;
  text-align: center;
`
const ImageWrapper = styled.div`
    height: 200px;
    width: 200px;
  `
const Image = styled.img`
    max-height: 150px;
    max-width: 150px;
    margin: 0 auto;
  `

export const PokemonCard = ({ pokemon, countOwned}) => {
  return (
    <div>
      <PokemonCardDiv>
        {
          pokemon.nickname &&
            <PokemonNickname>{pokemon.nickname}</PokemonNickname>
        }
        <ImageWrapper className="display-flex-centered">
          <Image
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </ImageWrapper>
        <PokemonName>{pokemon.name}</PokemonName>
        {
          countOwned != null &&
            <p className="text-centered">
              owned: {countOwned}
            </p>
        }
        <TypeList types={pokemon.types}></TypeList>
      </PokemonCardDiv>
    </div>
  )
}

export default PokemonCard