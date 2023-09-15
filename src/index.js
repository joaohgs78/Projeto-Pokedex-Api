import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PokemonProvider from './context/PokemonContext';
import PokemonCardProvider from './context/PokemonCardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonCardProvider>
  <PokemonProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PokemonProvider>
  </PokemonCardProvider>
);

