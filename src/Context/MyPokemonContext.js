import React, { createContext, useState } from 'react'

export const MyPokemonContext = createContext();

export const MyPokemonProvider = (props) => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const providerValue = [
    capturedPokemons,
    setCapturedPokemons,
  ];

  return (
    <MyPokemonContext.Provider value={providerValue}>
      {props.children}
    </MyPokemonContext.Provider>
  )
}