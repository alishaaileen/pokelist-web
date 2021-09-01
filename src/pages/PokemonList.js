import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

import { PokemonContext } from '../Context/PokemonContext';
import { MyPokemonContext } from '../Context/MyPokemonContext';

import PokemonCard from '../components/PokemonCard'
import Button from '../components/Button';
import { color } from '../constants/style';
import { mq } from '../assets/styling/breakpoints'

const ContentWrapper = styled.div`
  .list-wrapper {
    margin: 0 16px;
    display: flex;
    flex-flow: column nowrap;
  }

  .pokemon-card {
    display: flex;
  }

  ${mq('s')} {
    .list-wrapper {
      margin: 0 auto;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }
  }
`

const PokemonList = () => {
  const [pokemons, loadMore, getData] = useContext(PokemonContext);
  const [capturedPokemon] = useContext(MyPokemonContext);
  
  const countPokemonOwned = name => {
    const tempPokemon = capturedPokemon.filter(pokemon => pokemon.name === name)
    
    return tempPokemon.length
  }
  
  return (
    <ContentWrapper>
      <h1 className="text-centered">Pokemons List</h1>

      <div className="list-wrapper">
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
      </div>

      {
        // If loadMore is null, it means the "next" is null.
        // Which means that all Pokemons has been loaded
        // So the button shouldn't be showed anymore
        loadMore &&
          <div className="display-flex-centered">
            <Button
              bgColor={color.blue}
              callbackFunc={() => getData()}
            >
              <h2 className="mx-0 my-0 text-white">Load more</h2>
            </Button>
          </div>
      }
      
    </ContentWrapper>
  )
}

export default PokemonList;