import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()

    this.state = {
      pokemonArr: [],
      searchTerm: '',
      filteredPokemon: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemonArr => this.setState({pokemonArr: pokemonArr, filteredPokemon: pokemonArr}))
    .catch(e => console.log(e))
  }



  updatePokemon = (newPokemon) => {
    const addingPokemon = this.state.pokemonArr
    addingPokemon.push(newPokemon)

    this.setState({pokemonArr: addingPokemon})
  }

  searchPokemon = (event) => {
   
    this.setState({searchTerm: event.target.value, filteredPokemon: this.state.pokemonArr})
    
    if (event.target.value === ""){
      return this.state.filteredPokemon
    }

    this.setState({filteredPokemon: this.state.pokemonArr.filter(poke => poke.name.includes(this.state.searchTerm)).map(searchedPoke => {
      return searchedPoke
    })})
  
  }




  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm updatePokemon={this.updatePokemon} />
        <br />
        <Search onChange={this.searchPokemon} />
        <br />
        <PokemonCollection pokemonArr={this.state.filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
