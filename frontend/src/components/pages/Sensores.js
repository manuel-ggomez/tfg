import React from 'react';
import '../../App.css';
import Sidebar from '../Sidebar';
import './Sensores.css';

function Sensores() {
    return (
        <>
            <Sidebar />
            <div className='contenedor'>
                <ul className='listaSensores'>
                    <li>Sensores WiFi</li>
                    <li>Sensores Bluetooth</li>
                    <li>Sensores Radio Frecuencia</li>
                    <li>Sensores Redes Móviles</li>
                    <li>Sensores Ciberseguridad</li>
                    
                </ul>
                <ul className='listaSubsistemas'>
                    <li>Subsistema Big Data</li>
                    <li>Subsistema Gestión de flujos</li>
                    <li>Subsistema Procesamiento</li>
                    <li>Subsistema Ontologías</li>
                </ul>
                <div className=''>

                </div>
                <div className='accesoPandora'>
                    <a href='https://127.0.0.1'><b>Acceso General a Pandora FMS</b></a>
                </div>
            </div>
        </>
    )
}

export default Sensores
