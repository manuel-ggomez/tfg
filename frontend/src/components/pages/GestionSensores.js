import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from '../Sidebar';
import {getSensors, openSensor, openSubsistema} from '../../redux/actions/sensor_actions';
import './Home.css';
import './Configuracion.css';
import './GestionSensores.css';
import ListaSensores from './ListaSensores';


class GestionSensores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sensors: null,
            type: null,
            opened: false, 
            timeout: null
        }
        this.handleClickSensor = this.handleClickSensor.bind(this)
        this.handleClickSubsistema = this.handleClickSubsistema.bind(this)
    }

    componentDidMount() {
        this.props.getSensors()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sensor.sensors !== this.props.sensor.sensors) {
            this.setState({sensors: this.props.sensor.sensors})
        }
        if (this.props.sensor.sensorOpened && this.props.sensor.sensorStatus !== prevProps.sensor.sensorStatus){
            console.log('update')
            this.setState({
                timeout: setTimeout(()=>this.refresh(), 100)
            })
        }
    }

    componentWillUnmount() {
        clearTimeout(this.state.timeout)
    }

    refresh() {
        if (document.getElementById("consola") !== null){
            console.log('refresh')
            document.getElementById("consola").src+=""
        }
    }

    handleClickSensor(ip){
        this.props.openSensor(ip)
        this.setState({opened: true})
    }

    handleClickSubsistema(name){
        this.props.openSubsistema(name)
        this.setState({opened: true})
    }

    render() {
        return(
        <div style={{backgroundColor: '#203354', height: '100vh'}}>
            <Sidebar />
            <h1 style={{color: 'white', marginBottom: '50px'}}>Gestión de elementos PLICA</h1>
            <div className="contenedor" >
                <div className='huecoIzq' style={{height: '50vh'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button className="btnOpcion" style={{color: this.state.type === "wifi" ? 'red' : null}} onClick={() => this.setState({type: "wifi", opened: false})}>Sensores WiFi</button>
                            <button className="btnOpcion" style={{color: this.state.type === "bluetooth" ? 'red' : null}} onClick={() => this.setState({type: "bluetooth", opened: false})}>Sensores Bluetooth</button>
                            <button className="btnOpcion" style={{color: this.state.type === "rf" ? 'red' : null}} onClick={() => this.setState({type: "rf", opened: false})}>Sensores Radio Frecuencia</button>
                            <button className="btnOpcion" style={{color: this.state.type === "rm" ? 'red' : null}} onClick={() => this.setState({type: "rm", opened: false})}>Sensores Redes Móviles</button>
                            <button className="btnOpcion" style={{color: this.state.type === "ciberseguridad" ? 'red' : null}} onClick={() => this.setState({type: "ciberseguridad", opened: false})}>Sensores Ciberseguridad</button>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button className="btnOpcion" onClick={() => this.setState({type: "bigData", opened: false})}>Subsistema Big Data</button>
                            <button className="btnOpcion" onClick={() => this.setState({type: "subsist", opened: false})}>Subsistema Gestión de flujos</button>
                            <button className="btnOpcion" onClick={() => this.setState({type: "subsist", opened: false})}>Subsistema Procesamiento</button>
                            <button className="btnOpcion" onClick={() => this.setState({type: "subsist", opened: false})}>Subsistema Ontologías</button>
                        </div>
                </div>
                <div className='huecoDer' style={{margin: '30px', height: '50vh'}}>
                    {!this.state.opened ?
                        <ListaSensores sensors={this.state.sensors} type={this.state.type} handleClickSensor={this.handleClickSensor} handleClickSubsistema={this.handleClickSubsistema}/>
                        : this.props.sensor.sensorOpened ?
                        <iframe id="consola" src="http://localhost:8080" onLoad={()=>{clearTimeout(this.state.timeout); console.log('onload')}} style={{width: '100%', height: '100%'}}></iframe>
                :
                <h6>CARGANDO</h6>
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

export default connect(mapStateToProps, {getSensors, openSensor, openSubsistema})(GestionSensores);
