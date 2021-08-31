import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

import PokemonCard from '../components/PokemonCard'
import { MyPokemonContext } from '../Context/MyPokemonContext';

const ListWrapper = styled.div`
    width: fit-content;
    margin: 0 auto;
    justify-content: space-around;
  `

const MyPokemon = () => {
  const [capturedPokemons] = useContext(MyPokemonContext);
  
  return (
    <div className="pokemons-list">
      <h1 className="text-centered">My Pokemons</h1>

      <ListWrapper className="display-flex">
        {capturedPokemons.length === 0 && <h3>Nothing in here yet!</h3>}
        {capturedPokemons.map((pokemon, index) =>
          <div key={index}>
            <Link className="link-no-decoration" to={`details/${pokemon.name}`}>
              <PokemonCard
                image={pokemon.sprites && pokemon.sprites.other.dream_world.front_default}
                name={pokemon.name}
                nickname={pokemon.nickname}
                types={pokemon.types}
              >
              </PokemonCard>
            </Link>
          </div>
        )}
      </ListWrapper>
      
    </div>
  )
}

export default MyPokemon;