import React, {Component } from 'react';
import axios from "axios";

class Pokemon extends Component {
    constructor(props){
      super(props);
      this.state = {pokemon: null};
    }
  
    pokemonName = this.props.pokemon;
  
    //componentDidMount: pulls from axios do the axios.get thing
    componentDidMount(){
      axios.get('https://pokeapi.co/api/v2/pokemon/' + this.pokemonName).then((response) => {
      const data = response.data; 
      const newPokemonObj = {
        name: data.name,
        imageURL: data.sprites.front_default,
      }
      this.setState({pokemon: newPokemonObj});
    })
    .catch((error => console.log(error)));
  
  }
    render(){
  
      let display;
      if(!this.state.pokemon){
        display = <p>Loading...</p> 
      }
  
      else {
        display= (
          <>
           <ul>
         <img 
         src={this.state.pokemon.imageURL}
         alt={this.state.pokemon.name} />
          <li>Pokemon name: {(this.state.pokemon.name)}</li>
        </ul>
          </>
  
        );
      }
      return (
      <div className='pokemon'>{display}
      </div>
      );
    }
  }
  
export default Pokemon