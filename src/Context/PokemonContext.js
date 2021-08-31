import React, { useState, useEffect, useCallback, createContext } from 'react';
import { fetchData } from '../utils'

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const [loadMore, setLoadMore] = useState(`pokemon?limit=15`)

  useEffect( () => {
    getData();
  }, [])
  
  const getData = useCallback(
    async () => {
      const response = await fetchData(loadMore);
      const data = await response.json()

      setLoadMore(data.next.substring(26, data.next.length-1))

      data.results.map(async pokemon => {
        const res = await fetchData(`pokemon/${pokemon.name}`)
        const pokemonData = await res.json()

        // Push pokemon to the existing
        setPokemons(oldList => [...oldList, pokemonData])
      })
    }
  )

  const providerValue = [
    pokemons,
    setPokemons,
    getData,
  ];

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};