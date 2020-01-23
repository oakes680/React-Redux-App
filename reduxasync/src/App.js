import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Joke from './components/Weather'
import axios from 'axios';


function App() {

  useEffect(() => {
    axios
      .get('http://api.icndb.com/jokes/random')
      .then(res => {
        console.log('fetched',res.data.value.joke)
      })
      .catch(err => {
        console.log(err.res)
      })
  })

  return (
    <div className="App">
      <Joke/>
    </div>
  );
}

export default App;
