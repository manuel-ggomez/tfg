import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {getSensors, deleteSensor, createSensor} from '../../redux/actions/sensor_actions';


class Sensors extends Component {
    constructor(props){
      super(props);
      this.state = {
          sensors: null,
          name: "",
          type: "",
          ip: "",
          mac: ""
      }
      this.createSensor = this.createSensor.bind(this)
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
        this.props.createSensor(sensor)
    }

    
    render() {
        const sensors = this.state.sensors
        if (sensors !== null) {
            const sensorList = sensors.map((sensor) => {
                return(
                    <div>
                        {sensor.name} - {sensor.ip} - {sensor.mac} - {sensor.createdAt}
                        <button onClick={this.deleteSensor.bind(this, sensor.id)}>Borrar</button>
                    </div>
                )
            })

            return(
                <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
                    <h2>Sensores registrados en PLICA</h2>
                    {sensors.length > 0 ? 
                    <div>{sensorList}</div> : <h5>No hay sensores</h5>}
                    <div>
                    <form style={{width: "200px"}} onSubmit={this.createSensor} className='form' >
              <TextField
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => {this.setState({name: e.target.value})}} 
                  required
                  fullWidth
                  id="name"
                  label="Nombre del sensor"
                  autoFocus
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => {this.setState({type: e.target.value})}}
                  required
                  fullWidth
                  label="Tipo de sensor"
                  id="type"
              />
                <TextField
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => {this.setState({ip: e.target.value})}}
                  required
                  fullWidth
                  label="Dirección IP"
                  id="type"
              />
                <TextField
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => {this.setState({mac: e.target.value})}}
                  required
                  fullWidth
                  label="Dirección MAC"
                  id="type"
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className='submit'
              >
                  Crear
              </Button>
              </form>
                    </div>
                </div>
            )

        } else {
            return(
                <div className="backgroundMain">
                    CARGANDO
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {createSensor, getSensors, deleteSensor})(Sensors);