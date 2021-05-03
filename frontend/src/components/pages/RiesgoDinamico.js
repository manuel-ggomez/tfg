import React from 'react';
import Sidebar from '../Sidebar';

export default function RiesgoDinamico() {
  return(
    <>
    <Sidebar />
    <iframe src="http://localhost:3000/visualizacion" height="900" width="1895"></iframe>
    </>
  ); 
}