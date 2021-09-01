import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import { PageNotFound } from './404'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'
import MyPokemon from './MyPokemon'


export const router = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/pokelist-web" />
      <Route exact path='/pokelist-web' component={PokemonList}/>
      <Route exact path='/pokelist-web/details/:pokemonName' component={PokemonDetail}/>
      <Route exact path='/pokelist-web/my-pokemon'  component={MyPokemon}/>
    </Switch>
  )
}