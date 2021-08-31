import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { PageNotFound } from './404'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'
import MyPokemon from './MyPokemon'


export const router = () => {
  return (
    <Switch>
      <Route path='/' exact component={PokemonList}/>
      <Route path='/details/:pokemonName' component={PokemonDetail}/>
      <Route path='/my-pokemon' exact  component={MyPokemon}/>
    </Switch>
  )
}