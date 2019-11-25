import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    searchTerm:"",
    pokemons:[]
  }
componentDidMount=()=>{
  fetch('http://localhost:3000/pokemon')
  .then(resp=>resp.json())
  .then(pokemons=>{
    this.setState({ pokemons })
  })
}
searchChange=(event)=>{
  this.setState({
    searchTerm:event.target.value
  })
}
filterPokes=()=>{
  if(this.state.searchTerm.length>0){
    return this.state.pokemons.filter(pokemon=>pokemon.name.includes(this.state.searchTerm))
  }
  return this.state.pokemons
}
handlePost=(newPoke)=>{
  this.setState({
    pokemons: [...this.state.pokemons, newPoke]
  })
}

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handlePost={this.handlePost}/>
        <br />
        <Search searchTerm={this.state.searchTerm} onChange={this.searchChange} />
        <br />
        <PokemonCollection pokemons={this.filterPokes()}/>
      </Container>
    )
  }
}

export default PokemonPage
