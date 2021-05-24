import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from '../Sidebar';
import './Home.css';
import './Configuracion.css';
import './GestionSensores.css';
import '../Cards.css';
import ListaUsuarios from './ListaUsuarios';
import Profile2 from './Profile2';
import Register2 from './Register2';



class Usuarios2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: null
        }
    }

    render() {
        return(
        <div style={{backgroundColor: '#203354', height: '100vh'}}>
            <Sidebar />
            <div className='tituloUsuario' style={{marginBottom: '50px'}}>Gestión de usuarios</div>
            <div className="contenedor" >
                <div className='huecoIzq' style={{height: '50vh'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <button style={{margin: '20px', cursor: 'pointer', width: '360px'}} className="bn15" onClick={() => this.setState({type: "edit"})}>Editar perfil</button>
                            <button style={{margin: '20px', cursor: 'pointer', width: '360px'}} className="bn15" onClick={() => this.setState({type: "create"})}>Crear usuario</button>
                            <button style={{margin: '20px', cursor: 'pointer', width: '360px'}} className="bn15" onClick={() => this.setState({type: "show"})}>Mostrar usuarios registrados</button>
                        </div>
                </div>
                <div className='huecoDer' style={{margin: '0 30px 30px 30px'}}>
                    {this.state.type === null  ? <div style={{color: 'white', fontFamily: 'Header'}}>Seleccione una de las opciones del lado izquierdo</div>
                        : this.state.type === 'edit' ?
                        <Profile2 />
                        : this.state.type === 'create' ?
                        <Register2 />
                        : this.state.type === 'show' ?
                        <ListaUsuarios />
                        :
                        <h6 style={{color: 'white'}}>CARGANDO</h6>
                    }
                </div>
            </div>
        </div>
        )
    }

}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps)(Usuarios2);
