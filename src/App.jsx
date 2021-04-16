import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

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

  function showCards() {
    const random = Math.floor(Math.random() * 730) + 1;
    const url = `http://localhost:8000/api/${random}/`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setAvatar(response.data);
      });
  }

  return (
    <>
      <div className="App">
        <body>
          <div className="heroAvatar">
            <img src="https://nsa40.casimages.com/img/2021/04/15/210415123011254599.png" id="titleLogo" alt="title-logo" />
          </div>
          <div className="navBar">
            <button type="button" className="buttonOnMenu1">Menu 1</button>
            <button type="button" className="buttonOnMenu2">Menu 2</button>
            <button type="button" className="buttonOnMenu3">Menu 3</button>
          </div>
          <div className="cards">
            <Card avatar={avatar} />
            <Card avatar={avatar} />
            <Card avatar={avatar} />
            <Card avatar={avatar} />
            <Card avatar={avatar} />
          </div>
          <button type="button" onClick={showCards} className="drawButton">
            Card draw
          </button>
        </body>
      </div>
    </>
  );
}

export default App;
