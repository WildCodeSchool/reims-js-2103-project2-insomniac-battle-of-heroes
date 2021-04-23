import axios from 'axios';
import draw from './draw';

function drawCards(nb, setAvatarList) {
  draw(nb).map((id) => (
    axios.get(`http://localhost:8000/api/${id}/`)
      .then((response) => {
        setAvatarList((prevAvatarList) => [...prevAvatarList, response.data]);
      })
  ));
}

export default drawCards;
