import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    showFront:true
  }
  toggleImage=()=>{
    this.setState({
      showFront:!this.state.showFront
    })
  }
  render() {

    return (
      <Card onClick={this.toggleImage}>
        <div>
          <div className="image">
            <img src={
              this.state.showFront ?
              this.props.pokemon.sprites.front :
              this.props.pokemon.sprites.back
              } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat=>stat.name==="hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
