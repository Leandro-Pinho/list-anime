import React, { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import qs from 'qs';
import './App.css';

// api
const api = 'https://kitsu.io/api/edge/';
// limit de pagina
const LIMIT = 12;

function App() {
  // recede o value do search
  const [text, setText] = useState('bragon ball');
  // um array vazio que vai receber o resultado da consulta da api
  const [info, setInfo] = useState({});
  // pegando o numero da pagina
  const [offset, setOffset] = useState(0);

  useEffect(() => {

    // setInfo({});

    const query = {
      page: {
        limit: LIMIT,
        offset,
      }
    };

    if (text) {
      query.filter = {
        text,
      };
    }

    fetch(`${api}anime?${qs.stringify(query)}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(response);
      });


  }, [text, offset]);

  return (
    <div className="App">
      <h1>Animes</h1>

      <Search value={text} onChange={(search) => setText(search)} />

      { /* para mostrar a mensagem carregando, enquanto não carrega o conteudo */}
      {text && !info.data && <span>Carregando...</span>}

      {/* aqui se info existe, trazer a lista */}
      {info.data && (
        <ul className='animes-list'>
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              <div className='more'>
                <div className='dataAnime'>
                  Saiba mais <i class="fa-solid fa-up-right-from-square"></i>
                </div>
                {anime.attributes.canonicalTitle}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* paginação */}
      {info.meta && (
        <Pagination
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </div>
  );
}

export default App;
