import React from 'react';//core da biblioteca
import ReactDOM from 'react-dom'; //arvore de documentos...
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//busca no html o elemento do id root e dentro dele joga isso aqui acima...
);
