import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

import PokemonCard from '../components/PokemonCard'
import Button from '../components/Button'

import { MyPokemonContext } from '../Context/MyPokemonContext';
import { mq } from '../assets/styling/breakpoints';
import { color } from '../constants/style';

const ContentWrapper = styled.div`
  .list-wrapper {
    margin: 0 16px;
    display: flex;
    flex-flow: column nowrap;
    align-content: stretch;
  }

  .pokemon-card {
    display: flex;
  }

  .card-menu {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
  }

  .btn-menu {
    margin-bottom: 14px;
  }

  ${mq('m')} {
    .list-wrapper {
      margin: 0 auto;
      flex-flow: row wrap;
      justify-content: space-around;
    }
    .card-menu {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }
  }
`

const MyPokemon = () => {
  const [capturedPokemons, setCapturedPokemons] = useContext(MyPokemonContext);

  const releasePokemon = pokemon => {
    const index = capturedPokemons.indexOf(pokemon)
        , tempNewArray = [...capturedPokemons]
    
    tempNewArray.splice(index, 1)

    setCapturedPokemons(tempNewArray)
  }
  
  return (
    <ContentWrapper>
      <h1 className="text-centered">My Pokemons</h1>

      <div className="list-wrapper">
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
            
            <PokemonCard pokemon={pokemon}>
              <div className="card-menu">
                <div className="btn-menu">
                  <Link className="link-no-decoration" to={`details/${pokemon.name}`}>
                    <Button bgColor={color.blue}>
                      <h4 className="text-white my-0">Detail</h4>
                    </Button>
                  </Link>
                </div>
                <div className="btn-menu">
                  <Button bgColor={color.red} callbackFunc={() => releasePokemon(pokemon)}>
                    <h4 className="text-white my-0">Release</h4>
                  </Button>
                </div>
              </div>
            </PokemonCard>
          </div>
        )}
      </div>
      
    </ContentWrapper>
  )
}

export default MyPokemon;