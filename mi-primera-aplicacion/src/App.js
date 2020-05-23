import React from 'react';
import './App.css';


function ListaNombres(props) {
  const nombres = props.nombres;
  const listaNombres = nombres.map((nombre) =>
    <li key={nombre.id}>{nombre}</li>
  );
  return (
    <ul>{listaNombres}</ul>
  );
}

export default ListaNombres;
