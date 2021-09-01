import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import ResponsiveImg from './ResponsiveImg'
import { mq } from '../assets/styling/breakpoints'

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
  background-color: #ffffff99;
  display: flex;
  padding: 16px;
  margin: 10px 0;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 10px 10px #00000050;
  }

  .card-image {
    height: 100px;
    width: 100px;
    margin-right: 16px;
  }

  .card-info {
    flex-grow: 1;
  }

  .nickname, .name {
    margin-bottom: 0.5rem;
  }

  ${mq('s')} {
    display: block;
    &:hover {
      animation: ${shadowHover} 0.1s ease forwards;
    }

    .card-image {
      height: 150px;
      width: 150px;
      margin: 16px auto;
      padding: 24px;
    }
    .card-info {
      text-align: center;
    }
  }
`

export const PokemonCard = ({ pokemon, countOwned, children }) => {
  return (
    <>
      <PokemonCardDiv>
        <div className="card-image display-flex-centered">
          <ResponsiveImg
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>

        <div className="card-info">
          { pokemon.nickname &&
              <h2 className="nickname capitalize">
                {pokemon.nickname}
              </h2>
          }

          <h3 className="name capitalize">{pokemon.name}</h3>
          
          {
            countOwned != null &&
              <p className="text-owned">
                owned: {countOwned}
              </p>
          }
        </div>

        <div>
          { children }
        </div>
      </PokemonCardDiv>
    </>
  )
}

export default PokemonCard