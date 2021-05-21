import React, {Component} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Button from '../Button';
import './GestionUsuarios.css';


class GestionUsuarios extends Component {
    render(){
        return(
            <div style={{backgroundColor: '#203354', height: '100vh'}}>
                <Sidebar/>
                <div>
                    <div>
                        <h1 style={{color: 'white'}}>Gestión de Usuarios</h1>
                    </div>
                    <div class="opciones">
                        
                        <div><Link to="/administracion/gestion-usuarios/editar-perfil" className="bn15">Editar perfil</Link></div>
                        <div><Link to="/administracion/gestion-usuarios/crear-usuario" className="bn15">Crear usuario</Link></div>
                        <div><Link to="/administracion/gestion-usuarios/lista-usuarios" className="bn15">Mostrar usuarios registrados</Link></div>

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps)(GestionUsuarios);