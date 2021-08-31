import React, { useState, useEffect, useCallback, useContext } from 'react';
import { MyPokemonContext } from '../Context/MyPokemonContext';
import { fetchData } from '../utils'
import styled from '@emotion/styled'

import ChipMove from '../components/ChipMove'
import TypeList from '../components/TypeList'
import ModalCatchPokemon from '../components/ModalCatchPokemon';
import Loading from '../components/Loading';

import { mq } from '../assets/styling/breakpoints'


const Header = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
`
const Left = styled.div`
  width: 100%;
  ${mq('m')}: {
    width: 100%;
  }
`
const Right = styled.div`
  width: 100%;
  ${mq('m')}: {
    width: 100%;
  }
`
const ImageWrapper = styled.div`
  width: 200px;
  height:200px;
  margin: 0 auto;
`
const Image = styled.img`
  width: inherit;
  height: inherit;
  margin: 0 auto;
`
const BtnCatch = styled.button`
  background-color: blue;
  border-radius: 5px;
  width: 100%;
  height: 40px;
`

const PokemonDetail = ({ match }) => {
  const [pokemon, setPokemon] = useState({});
  const [capturedPokemons, setCapturedPokemons] = useContext(MyPokemonContext)
  const [isCaptured, setIsCaptured] = useState(false)

  const [modalIsActive, setModalIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect( () => {
    getDetail();
  }, [])
  
  const getDetail = useCallback(
    async () => {
      const response = await fetchData(`pokemon/${match.params.pokemonName}`);
      const json = await response.json()
      setPokemon(json)
    }
  )

  const catchPokemon = (pokemon) => {
    setIsLoading(true)

    setTimeout(() => setIsLoading(false), 1000)
    setTimeout(() => setModalIsActive(true), 1000)
    // Random boolean with 50% success percentage
    setIsCaptured(Math.random() >= 0.5)
  }

  const saveCatchedPokemon = (nickname) => {
    setModalIsActive(false)
    setCapturedPokemons(prevList => [...prevList, {...pokemon, nickname: nickname}])
  }
  
  return (
    <div className="pokemons-list">
      <h1 className="text-centered">Pokemon Details</h1>

      <div className="display-flex">
        <Left>
          <Header>
            <ImageWrapper>
              <Image src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            </ImageWrapper>
            <div>
              <h2 className="capitalize text-centered">{pokemon.name}</h2>
            </div>
            <TypeList types={pokemon.types}></TypeList>
            <div>
              <BtnCatch onClick={ () => catchPokemon(pokemon)}>
                Catch
              </BtnCatch>
            </div>
          </Header>
        </Left>

        <Right>
          <div>
            <h3>Moves</h3>
            <div className="display-flex">
              {pokemon.moves && pokemon.moves.map((move, index) =>
                <ChipMove key={index} name={move.move.name}/>
              )}
            </div>
          </div>
        </Right>
      </div>

      { isLoading && <Loading /> }

      {
        modalIsActive &&
          <ModalCatchPokemon
            closeModal={modalIsActive => setModalIsActive(modalIsActive)}
            saveCatchedPokemon={event => saveCatchedPokemon(event)}
            isCaptured={isCaptured}
            pokemon={pokemon}
            capturedPokemons={capturedPokemons}
          />
      }

    </div>
  )
}

export default PokemonDetail;
