import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2() {
  return (
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/img-8.jpg'
            text='Gestión de Sensores y Subsistemas'
            label='Gestión'
            path='/gestion/sensores'
          />
          <CardItem
            src='images/configuration.jpeg'
            text='Configuración'
            label='Gestión'
            path='/gestion/configuracion'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='images/riesgo.jpg'
            text='Riesgo Dinámico'
            label='Visualización'
            path='/visualizacion/riesgo-dinamico'
          />
          <CardItem
            src='images/database.jpg'
            text='Consulta de Datos'
            label='Visualización'
            path='/visualizacion/consulta-datos'
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards2;
