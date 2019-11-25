import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
// "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
// "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png"

  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleOnChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    const postObj = {
      name:this.state.name,
      stats:[{
        name:"hp",
        value:this.state.hp
      },{}],
      sprites:{
        front:this.state.frontUrl,
        back:this.state.backUrl
      }
    }
    const configObj = {
      method:"POST",
      headers:{
          'Content-Type': 'application/json',
          'Accept':'application/json'
      },
      body:JSON.stringify(postObj)
    }
    fetch('http://localhost:3000/pokemon',configObj)
    .then(resp=>resp.json())
    .then(newPoke=>{
      console.log(newPoke)
      this.props.handlePost(newPoke)
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleOnChange} value={this.state.name} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleOnChange} value={this.state.hp}label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleOnChange} value={this.state.frontUrl}label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.handleOnChange} value={this.state.backUrl}label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
