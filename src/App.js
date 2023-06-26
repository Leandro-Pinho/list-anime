import React, { useState } from 'react';
import Search from './components/Search/Search';
import './App.css';

function App() {
  const [text, setText] = useState('');
  console.log(text)
  
  return (
    <div className="App">
      <h1>Animes</h1>
      <Search value={text} onChange={(search) => setText(search)} />
    </div>
  );
}

export default App;
