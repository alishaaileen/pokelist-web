import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

import { PokemonContext } from '../Context/PokemonContext';
import { MyPokemonContext } from '../Context/MyPokemonContext';

import PokemonCard from '../components/PokemonCard'
import Button from '../components/Button';
import { color } from '../constants/style';

const ListWrapper = styled.div`
    width: fit-content;
    margin: 3rem auto;
    justify-content: space-evenly;
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
                pokemon={pokemon}
                countOwned={countPokemonOwned(pokemon.name)}
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
          <div className="display-flex-centered">
            <Button
              btnText="Load more"
              bgColor={color.blue}
              btnTextColor={color.white}
              callbackFunc={() => getData()}
            />
          </div>
      }
      
    </div>
  )
}

export default PokemonList;