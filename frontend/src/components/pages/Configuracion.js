import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from '../Sidebar';
import Sensors from './Sensors';
import Topics from './Topics';
import Monitorizar from './Monitorizar';
import './Home.css';
import './Configuracion.css';
import '../Cards.css';


class Configuracion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: null
        }
    }
    render() {
        return(
            <div style={{backgroundColor: '#203354', height: '100vh'}}>
                <Sidebar/>
                <div className='tituloPagina'>Configuración de parámetros del sistema</div>
                <div className="contenedor">
                    <div className='huecoIzq' style={{height: '50vh'}}>
                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema1" ? 'red' : null, fontFamily: 'Header'}} onClick={() => this.setState({type: "subsistema1"})}>Subsistema Gestión de flujos</button>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema2" ? 'red' : null, fontFamily: 'Header'}} onClick={() => this.setState({type: "subsistema2"})}>Subsistema Big Data</button>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema3" ? 'red' : null, fontFamily: 'Header'}} onClick={() => this.setState({type: "subsistema3"})}>Subsistema Procesamiento</button>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema4" ? 'red' : null, fontFamily: 'Header'}} onClick={() => this.setState({type: "subsistema4"})}>Subsistema Ontologías</button>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button className="btnOpcion" style={{color: this.state.type === "sensor" ? 'red' : null, fontFamily: 'Header'}} onClick={() => this.setState({type: "sensor"})}>Inventario de sensores PLICA</button>
                        </div>
                    </div>
                    <div className='huecoDer' style={{margin: '30px', height: '50vh'}}>
                        {this.state.type === null ? <div style={{color: 'white', fontFamily: 'Header'}}>Elija una opción del lado izquierdo de la pantalla</div> : this.state.type === "sensor" ? <Sensors/> : this.state.type === "subsistema1" ? <Topics/> : <Monitorizar/> }
                        
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps)(Configuracion);