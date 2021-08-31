import React, { useState, useEffect, useCallback, createContext } from 'react';
import { API_URL } from '../constants'
import { fetchData } from '../utils'

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const [loadMore, setLoadMore] = useState(`${API_URL}pokemon?limit=20`)

  useEffect( () => {
    getData();
  }, [])
  
  const getData = useCallback(
    async () => {
      const response = await fetchData(loadMore);
      const data = await response.json()

      setLoadMore(data.next)

      data.results.map(async pokemon => {
        const res = await fetchData(`${API_URL}pokemon/${pokemon.name}`)
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