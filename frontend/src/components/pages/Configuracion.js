import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from '../Sidebar';
import Sensors from './Sensors';
import Topics from './Topics';
import './Home.css';
import './Configuracion.css';


class Configuracion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: null
        }
    }
    render() {
        return(
            <>
                <Sidebar/>
                <h1>Configuración de parámetros del sistema</h1>
                <div className="contenedor">
                    <div className='huecoIzq'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema1" ? 'red' : null}} onClick={() => this.setState({type: "subsistema1"})}>Subsistema Big Data</button>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema2" ? 'red' : null}} onClick={() => this.setState({type: "subsistema2"})}>Subsistema Gestión de flujos</button>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema3" ? 'red' : null}} onClick={() => this.setState({type: "subsistema3"})}>Subsistema Procesamiento</button>
                            <button className="btnOpcion" style={{color: this.state.type === "subsistema4" ? 'red' : null}} onClick={() => this.setState({type: "subsistema4"})}>Subsistema Ontologías</button>
                            <button className="btnOpcion" style={{color: this.state.type === "sensor" ? 'red' : null}} onClick={() => this.setState({type: "sensor"})}>Inventario de sensores</button>
                        </div>
                    </div>
                    <div className='huecoDer'>
                        {this.state.type === null ? <div>Elige</div> : this.state.type.startsWith('subsistema') ? <Topics/> : <Sensors/> }
                        
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps)(Configuracion);