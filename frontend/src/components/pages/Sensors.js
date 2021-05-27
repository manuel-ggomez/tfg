import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import {getSensors, deleteSensor, createSensor, resetSensorError, resetSensorSuccess} from '../../redux/actions/sensor_actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DeleteIcon from '@material-ui/icons/Delete';
import './ListaUsuarios.css';
import './Home.css'
import '../Cards.css'
import SensorForm from './SensorForm';


class Sensors extends Component {
    constructor(props){
      super(props);
      this.state = {
          sensorFormOpen: false,
          sensors: null,
          name: "",
          type: "",
          subtype: "",
          ip: "",
          mac: ""
      }
      this.createSensor = this.createSensor.bind(this)
      this.closeAlert = this.closeAlert.bind(this)
      this.handleCloseSensorForm = this.handleCloseSensorForm.bind(this)
      this.handleChangeSensor = this.handleChangeSensor.bind(this)

    }

    componentDidMount() {
      this.props.getSensors()
    }

    componentDidUpdate(prevProps) {
        if (this.props.sensor !== prevProps.sensor) {
            this.setState({
                sensors: this.props.sensor.sensors
            })
        }
    }

    deleteSensor(id){
      this.props.deleteSensor(id)
    }

    createSensor(e){
        e.preventDefault()

        this.setState({
            sensorFormOpen: true,  
            name: "",
            type: "",
            subtype: "",
            ip: "",
            mac: ""
        })
    }

    closeAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.resetSensorError()
        this.props.resetSensorSuccess()
    }

    handleCloseSensorForm(value){
        if (value) {
            const sensor = {
                name: this.state.name,
                type: this.state.type,
                ip: this.state.ip,
                mac: this.state.mac
            };
            this.setState({
                sensorFormOpen: false,
                name: "",
                type: "",
                subtype: "",
                ip: "",
                mac: ""
            }, () => {this.props.createSensor(sensor)})
        } else {
            this.setState({
                sensorFormOpen: false
            })
        }
    }
    
    handleChangeSensor(value, type){
        let state = this.state
        state[type] = value
        this.setState(state)
    }

    
    render() {
        const sensors = this.state.sensors
        if (sensors !== null) {
            const sensorList = sensors.map((sensor) => {
                let formatter = new Intl.DateTimeFormat("es-ES", {
                    year: "numeric",
                    month: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric"
                });
                let fecha = formatter.format(Date.parse(sensor.createdAt))
                return(
                    <div style={{display: 'flex', fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px'}}>
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '19%'}}>{sensor.name}</div>  
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '19%'}}>{sensor.ip}</div>
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '28%'}}>{sensor.mac}</div>  
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '28%'}}>{fecha}</div>
                        <button style={{width: '6%'}} className="delete2" onClick={this.deleteSensor.bind(this, sensor.id)}><DeleteIcon/></button>
                    </div>
                )
            })

            return(
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%'}}>
                    <div className='subtituloPagina' style={{marginBottom: '20px'}} >Sensores registrados en PLICA</div>
                    <Button
                        variant="contained"
                        color="secondary"
                        className='submit'
                        onClick={this.createSensor}
                        style={{marginBottom: '40px'}}
                    >
                        Crear sensor
                    </Button>
                    {sensors.length > 0 ? 
                    <>
                    <div style={{display: 'flex', color: 'white', width: '100%', textAlign: 'center', marginBottom: '20px'}} >
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '19%', textDecoration: 'underline'}}>Nombre</div>  
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '19%', textDecoration: 'underline'}}>Dirección IP</div>
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '28%', textDecoration: 'underline'}}>Dirección MAC</div>  
                        <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '28%', textDecoration: 'underline'}}>Fecha de creación</div>
                        <div style={{width: '6%'}}/>
                    </div>
                    <div style={{color: 'white', fontFamily: 'Header', width: '100%', textAlign: 'center'}}>{sensorList}</div> 
                    </>
                    : <div style={{color: 'white', fontFamily: 'Header'}}>No hay sensores</div>}
                    
                    
                    <SensorForm open={this.state.sensorFormOpen}
                    name={this.state.name}
                    type={this.state.type}
                    subtype={this.state.subtype}
                    ip={this.state.ip}
                    mac={this.state.mac}
                    handleClose={this.handleCloseSensorForm}
                    handleChange={this.handleChangeSensor}
                    />
                    <Snackbar open={this.props.sensor.success !== ""} autoHideDuration={3000} onClose={this.closeAlert}>
                        <MuiAlert onClose={this.closeAlert} severity="success" variant="filled">
                            {this.props.sensor.success}
                        </MuiAlert>
                    </Snackbar>
                    <Snackbar open={this.props.sensor.error !== ""} autoHideDuration={3000} onClose={this.closeAlert}>
                        <MuiAlert onClose={this.closeAlert} severity="error" variant="filled">
                            {this.props.sensor.error}
                        </MuiAlert>
                    </Snackbar>
                </div>
            )

        } else {
            return(
                <div style={{color: 'white'}} >
                    CARGANDO
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {createSensor, getSensors, deleteSensor, resetSensorError, resetSensorSuccess})(Sensors);