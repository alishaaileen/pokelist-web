import React, { useState, useEffect, useCallback, useContext } from 'react';
import { MyPokemonContext } from '../Context/MyPokemonContext';
import { fetchData } from '../utils'
import styled from '@emotion/styled'

import List from '../components/List'
import TypeList from '../components/TypeList'
import ModalCatchPokemon from '../components/ModalCatchPokemon';
import Loading from '../components/Loading';
import Button from '../components/Button';
import ResponsiveImg from '../components/ResponsiveImg';

import { mq } from '../assets/styling/breakpoints'
import { color } from '../constants/style';
import { css } from '@emotion/css';

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
const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 24px;
`
const ImageWrapper = styled.div`
  max-width: 200px;
  max-height:200px;
  margin: 2rem auto;
`

const PokemonDetail = ({ match }) => {
  const [pokemon, setPokemon] = useState({});
  const [capturedPokemons, setCapturedPokemons] = useContext(MyPokemonContext)
  const [isCaptured, setIsCaptured] = useState(false)
  const [moves, setMoves] = useState([])
  const [abilities, setAbilities] = useState([])

  const [modalIsActive, setModalIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getDetail();
  }, [])
  
  const getDetail = useCallback(
    async () => {
      const response = await fetchData(`pokemon/${match.params.pokemonName}`);
      const json = await response.json()
      setPokemon(json)
      setMoves(() => {return json.moves.map(e => e.move)})
      setAbilities(() => {return json.abilities.map(e => e.ability)})
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
          <Wrapper>
            <ImageWrapper>
              <ResponsiveImg src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            </ImageWrapper>

            <div>
              <h2 className="capitalize text-centered">{pokemon.name}</h2>
            </div>
            
            <div>
              <p>Weight: {pokemon.weight}</p>
              <p>Height: {pokemon.height}</p>
            </div>

            <TypeList types={pokemon.types}></TypeList>
            <div className="my">
              <Button
                centered={true}
                width={`100%`}
                bgColor={color.blue}
                callbackFunc={ () => catchPokemon(pokemon)}
              >
                <h2 className="mx-0 my-0 text-white">Catch</h2>
              </Button>
            </div>
          </Wrapper>

          <Wrapper>
            <h2>Abilities</h2>
            <List
              data={abilities}
              property="name"
            />
          </Wrapper>

          {/* <Wrapper>
            <h2 className="capitalize">My {pokemon.name}</h2>

            {
              
            }
          </Wrapper> */}
        </Left>

        <Right>
          <Wrapper>
            <h3>Moves</h3>
            <List
              data={moves}
              property="name"
            />
          </Wrapper>
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
