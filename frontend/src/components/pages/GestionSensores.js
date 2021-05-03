import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from '../Sidebar';
import Sensors from './Sensors';
import {getSensors} from '../../redux/actions/sensor_actions';
import Topics from './Topics';
import './Home.css';
import './Configuracion.css';
import './GestionSensores.css';
import ListaSensores from './ListaSensores';


class GestionSensores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sensors: null,
            type: null
        }
    }

    componentDidMount() {
        this.props.getSensors()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sensor.sensors !== this.props.sensor.sensors) {
            this.setState({sensors: this.props.sensor.sensors})
        }
    }

    render() {
        return(
        <>
            <Sidebar />
            <h1>Gestión de elementos PLICA</h1>
            <div className="contenedor">
                <div className='huecoIzq'>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <button className="btnOpcion" style={{color: this.state.type === "wifi" ? 'red' : null}} onClick={() => this.setState({type: "wifi"})}>Sensores WiFi</button>
                        <button className="btnOpcion" style={{color: this.state.type === "bluetooth" ? 'red' : null}} onClick={() => this.setState({type: "bluetooth"})}>Sensores Bluetooth</button>
                        <button className="btnOpcion" style={{color: this.state.type === "rf" ? 'red' : null}} onClick={() => this.setState({type: "rf"})}>Sensores Radio Frecuencia</button>
                        <button className="btnOpcion" style={{color: this.state.type === "rm" ? 'red' : null}} onClick={() => this.setState({type: "rm"})}>Sensores Redes Móviles</button>
                        <button className="btnOpcion" style={{color: this.state.type === "ciberseguridad" ? 'red' : null}} onClick={() => this.setState({type: "ciberseguridad"})}>Sensores Ciberseguridad</button>

                        <button>Subsistema Big Data</button>
                        <button>Subsistema Gestión de flujos</button>
                        <button>Subsistema Procesamiento</button>
                        <button>Subsistema Ontologías</button>
                    </div>
                    
                </div>
                <div className='huecoDer'>
                    <ListaSensores sensors={this.state.sensors} type={this.state.type}/>
                </div>
            </div>
        </>
        )
    }

}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {getSensors})(GestionSensores);
