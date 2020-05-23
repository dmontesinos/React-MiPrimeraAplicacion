import React from 'react';
import './App.css';

function Reloj() {
  return (
    <div className="App">
      <h1>Mi primer componente</h1>
      <h2>Hora: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}


export default Reloj;
