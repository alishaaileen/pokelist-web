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
        {
          capturedPokemons.length === 0 &&
            <div className="text-centered">
              <h3>You haven't catched any Pokemon (yet)!</h3>
              <p>
                {`No worries, just go to the PokeList > select a Pokemon > hit "Catch" button`}
              </p>
            </div>
        }

        {capturedPokemons.map((pokemon, index) =>
          <div key={index}>
            <Link className="link-no-decoration" to={`details/${pokemon.name}`}>
              <PokemonCard
                pokemon={pokemon}
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