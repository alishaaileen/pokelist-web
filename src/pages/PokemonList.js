import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

import PokemonCard from '../components/PokemonCard'
import { PokemonContext } from '../Context/PokemonContext';
import { MyPokemonContext } from '../Context/MyPokemonContext';

const ListWrapper = styled.div`
    width: fit-content;
    margin: 0 auto;
    justify-content: space-around;
  `
  
const PokemonList = () => {
  const [pokemons, loadMore, getData] = useContext(PokemonContext);
  const [capturedPokemon] = useContext(MyPokemonContext);
  
  const countPokemonOwned = name => {
    const tempPokemon = capturedPokemon.filter(pokemon => pokemon.name === name)
    
    return tempPokemon.length
  }
  
  return (
    <div className="pokemons-list">
      <h1 className="text-centered">Pokemons List</h1>

      <ListWrapper className="display-flex">
        {pokemons.map((pokemon, index) =>
          <div key={index}>
            <Link className="link-no-decoration" to={`details/${pokemon.name}`}>
              <PokemonCard
                image={pokemon.sprites && pokemon.sprites.other.dream_world.front_default}
                name={pokemon.name}
                countOwned={countPokemonOwned(pokemon.name)}
                types={pokemon.types}
              >
              </PokemonCard>
            </Link>
          </div>
        )}
      </ListWrapper>
      {
        // If loadMore is null, it means the "next" is null.
        // Which means that all Pokemons has been loaded
        // So the button shouldn't be showed anymore
        loadMore &&
          <button onClick={() => getData()}>Load more</button>
      }
      
    </div>
  )
}

export default PokemonList;