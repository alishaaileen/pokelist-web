import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import { PageNotFound } from './404'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'
import MyPokemon from './MyPokemon'


export const router = () => {
  return (
    <Switch>
      <Redirect path='/' to='/pokelist-web'/>
      <Route path='/pokelist-web' exact component={PokemonList}/>
      <Route path='/pokelist-web/details/:pokemonName' component={PokemonDetail}/>
      <Route path='/pokelist-web/my-pokemon' exact  component={MyPokemon}/>
    </Switch>
  )
}