import React, { Component } from 'react'

export default class PokemonCard extends Component {
  render() {
    return (
      <div>
        {this.props.id} {this.props.name}
      </div>
    )
  }
}