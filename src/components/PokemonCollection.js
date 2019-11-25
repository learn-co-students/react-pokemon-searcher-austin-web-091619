import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  pokeShow=()=>{
    return this.props.pokemons.map(pokemon=><PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  }
  render() {
    // console.log(this.props.pokemons[0])
    return (
      <Card.Group itemsPerRow={6}>
        {this.pokeShow()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
