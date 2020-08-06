import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {


  //1 write a handleClick function that fetches names from API.
  // iterate through the names 
  // display names

  const [pokemon, setPokemon] = useState([]);

  const handleClick = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then(response => setPokemon(response.data.results))
  }

  return (
    <div className="App">
      <h3>Click the button to diplay the names of all 807 Pokemon using the <a target='black' href='https://pokeapi.co/'>Pokemon API</a>!</h3>
      <button onClick={handleClick}>Fetch Pokemon</button>

      <div id="box">
        <ul>
          {pokemon.length > 0 && pokemon.map((pokemon, index) => {
            // arrow function to traverse thru the pokemon json objects returned in line 
            return (<li key={index}>{pokemon.name}</li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
