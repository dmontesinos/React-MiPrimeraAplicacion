import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListaNombres from './App';
import * as serviceWorker from './serviceWorker';


const nombres = ['Ian', 'MCarmen', 'Daniel'];
ReactDOM.hydrate(
  <React.StrictMode>
    <ListaNombres nombres={nombres} />,
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
