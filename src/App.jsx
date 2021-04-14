/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  const [avatar, setAvatar] = useState({
    name: 'Nebula',
    powerstats: {
      intelligence: '63',
      strength: '52',
      speed: '13',
      durability: '50',
      power: '42',
      combat: '60',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10632.jpg',
    },
  });
  const random = Math.floor(Math.random() * 730) + 1;
  const url = `http://localhost:8000/api/${random}/`;
  function showCards() {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setAvatar(response.data);
      });
  }

  // function test() {
  //   return (
  //     <p>Hi</p>
  //   );
  // }
  return (
    <div className="App">
      <Card avatar={avatar} />
      <Card avatar={avatar} />
      <Card avatar={avatar} />
      <Card avatar={avatar} />
      <Card avatar={avatar} />
      <button type="button" onClick={showCards}>
        tirage de cartes
      </button>
    </div>
  );
}

export default App;
