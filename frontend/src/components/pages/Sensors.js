import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getSensors, deleteSensor, createSensor, resetSensorError, resetSensorSuccess} from '../../redux/actions/sensor_actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';
import './ListaUsuarios.css';
import './Home.css'


class Sensors extends Component {
    constructor(props){
      super(props);
      this.state = {
          sensors: null,
          name: "",
          type: "",
          subtype: "",
          ip: "",
          mac: ""
      }
      this.createSensor = this.createSensor.bind(this)
      this.closeAlert = this.closeAlert.bind(this)
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
        const sensor = {
            name: this.state.name,
            type: this.state.type,
            ip: this.state.ip,
            mac: this.state.mac
        };

        this.setState({
            name: "",
            type: "",
            subtype: "",
            ip: "",
            mac: ""
        })

        this.props.createSensor(sensor)
    }

    closeAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.resetSensorError()
        this.props.resetSensorSuccess()
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
                    <div style={{display: 'flex', fontFamily: 'Header'}}>
                        {sensor.name} - {sensor.ip} - {sensor.mac} - {fecha}
                        <button className="delete2" onClick={this.deleteSensor.bind(this, sensor.id)}><DeleteIcon/></button>
                    </div>
                )
            })

            return(
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{color: 'white', marginBottom: '20px', fontFamily: 'Header', fontWeight: 'normal'}}>Sensores registrados en PLICA</h2>
                    {sensors.length > 0 ? 
                    <div style={{color: 'white', fontFamily: 'Header'}}>{sensorList}</div> : <div style={{color: 'white', fontFamily: 'Header'}}>No hay sensores</div>}
                    <div>
                    <form style={{width: "200px"}} onSubmit={this.createSensor} className='form' >
              <TextField
                  variant="filled"
                  margin="normal"
                  onChange={(e) => {this.setState({name: e.target.value})}} 
                  required
                  fullWidth
                  autoComplete="off"
                  id="name"
                  label="Nombre del sensor"
                  autoFocus
                  value={this.state.name}
                  InputProps={{
                    style: {
                        backgroundColor: 'white'
                    }
                  }}
              />
              <InputLabel id="typeSelect" style={{color: 'white'}} >Tipo de sensor</InputLabel>
                    <Select
                        fullWidth
                        labelId="typeSelect"
                        value={this.state.type}
                        onChange={(e) => {this.setState({type: e.target.value, subtype: e.target.value === "ciberseguridad" ? this.state.subtype : ""})}}
                        >
                        <MenuItem value={"wifi"}>WiFi</MenuItem>
                        <MenuItem value={"bluetooth"}>Bluetooth</MenuItem>
                        <MenuItem value={"rf"}>Radio Frecuencia</MenuItem>
                        <MenuItem value={"rm"}>Redes Móviles</MenuItem>
                        <MenuItem value={"ciberseguridad"}>Ciberseguridad</MenuItem>
                    </Select>
                {this.state.type === "ciberseguridad" ?
                    <>
                        <InputLabel id="subtypeSelect" style={{marginTop: '10px', color: 'white'}}>Subtipo</InputLabel>
                        <Select
                            fullWidth
                            labelId="subtypeSelect"
                            value={this.state.subtype}
                            onChange={(e) => {this.setState({subtype: e.target.value})}}
                            >
                            <MenuItem value={"siem"}>Siem</MenuItem>
                            <MenuItem value={"fw"}>Firewall</MenuItem>
                            <MenuItem value={"ids"}>IDS</MenuItem>
                            <MenuItem value={"trafico"}>Tráfico</MenuItem>
                        </Select>
                    </>
                    : null}
            
                <TextField
                  variant="filled"
                  margin="normal"
                  onChange={(e) => {this.setState({ip: e.target.value})}}
                  required
                  fullWidth
                  autoComplete="off"
                  label="Dirección IP"
                  id="ip"
                  value={this.state.ip}
                  InputProps={{
                    style: {
                        backgroundColor: 'white'
                    }
                }}
              />
                <TextField
                  variant="filled"
                  margin="normal"
                  onChange={(e) => {this.setState({mac: e.target.value})}}
                  required
                  fullWidth
                  autoComplete="off"
                  label="Dirección MAC"
                  id="mac"
                  value={this.state.mac}
                  InputProps={{
                    style: {
                        backgroundColor: 'white'
                    }
                }}
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className='submit'
              >
                  Crear
              </Button>
              </form>
                    </div>
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