import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  const [hero, setHero] = useState();
  const [vilain, setVilain] = useState();

  function showCards(id, setAvatar) {
    const url = `http://localhost:8000/api/${id}/`;
    axios.get(url)
      .then((response) => {
        setAvatar(response.data);
      });
  }

  return (
    <div className="App">
      {hero && <Card avatar={hero} />}
      <button type="button" onClick={() => showCards(88, setHero)}>
        tirage du héros
      </button>
      {vilain && <Card avatar={vilain} />}

      <button type="button" onClick={() => showCards(89, setVilain)}>
        tirage du vilain
      </button>
    </div>
  );
}

export default App;
