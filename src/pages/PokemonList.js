// import React from 'react'
// import PokemonCard from '../components/PokemonCard'

// export const PokemonList = () => {
//   return (
//     <div className="App">
//       <PokemonCard />
//     </div>
//   )
// }

import React, { useState } from 'react';
import PokemonCard from '../components/PokemonCard'

const PokemonList = () => {
  const [pokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ]);

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
      
      {pokemons.map((pokemon) =>
        <PokemonCard
          key={`${pokemon.id}-${pokemon.name}`}
          id={pokemon.id}
          name={pokemon.name}>
        </PokemonCard>)}
    </div>
  )
}

export default PokemonList;
