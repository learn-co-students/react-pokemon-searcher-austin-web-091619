import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  showBack = (event) => {
    if(this.state.clicked === false || this.state.clicked === true){
      this.setState({clicked: !this.state.clicked})
    }
  }


  render() {
    return (
      <Card onClick={this.showBack}>
        <div>
          <div className="image">
            <img src={this.state.clicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
