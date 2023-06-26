import React, { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import './App.css';


const api = 'https://kitsu.io/api/edge/';

function App() {
  // recede o value do search
  const [text, setText] = useState('bragon ball');
  // um array vazio que vai receber o resultado da consulta da api
  const [info, setInfo] = useState({});

  useEffect(() => {

    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
          console.log(response);
        });
    }

  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <Search value={text} onChange={(search) => setText(search)} />

      {/* aqui se info existe, trazer a lista */}
      {info.data && (
        <ul className='animes-list'>
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
