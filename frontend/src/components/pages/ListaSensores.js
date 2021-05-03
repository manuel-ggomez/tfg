import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from '../Sidebar';
import Sensors from './Sensors';
import Topics from './Topics';
import './Home.css';
import './Configuracion.css';


export default class ListaSensores extends Component {
    
    render() {
        let sensors = this.props.sensors
        if (sensors !== null) {
            if (this.props.type !== null) {
                sensors = sensors.filter((sensor) => sensor.type === this.props.type)
                const sensorList = sensors.map((sensor) => {
                    return(
                        <div>
                            {sensor.name} - {sensor.ip} - {sensor.mac} - {sensor.createdAt}
                        </div>
                    )
            })
            return(
                <div>
                    {sensorList.length > 0 ? sensorList : <div>No hay sensores</div>}
                </div>
            )
            } else {
                return(
                    <div>
                        Seleccione tipo de sensor
                    </div>
                )
            }
            
        } else {
            return(
                <div>CARGANDO</div>
            )
        }
    }
}
