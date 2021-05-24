import React, {Component} from 'react';
import './Home.css';
import './Configuracion.css';


export default class ListaSensores extends Component {

    handleClickSensor(ip){
        this.props.handleClickSensor(ip)
    }

    handleClickSubsistema(name){
        this.props.handleClickSubsistema(name)
    }
    
    render() {
        let sensors = this.props.sensors
        if (sensors !== null) {
            if (this.props.type !== null) {
                switch(this.props.type){
                    case "bigData":
                        return(
                            <>
                                <button className='btnOpcion' onClick={this.handleClickSubsistema.bind(this, "elasticsearch")}>
                                    Elasticsearch
                                </button>
                                <button className='btnOpcion' onClick={this.handleClickSubsistema.bind(this, "kibana")}>
                                    Kibana
                                </button>
                            </>
                        )
                        
                    case "subsist1" :
                        this.props.handleClickSensor("172.17.0.3")
                        return null;
                    case "subsist2":
                        this.props.handleClickSensor("172.17.0.3")
                        return null;
                    case "subsist3":
                        this.props.handleClickSensor("172.17.0.3")
                        return null;

                    default:
                        sensors = sensors.filter((sensor) => sensor.type === this.props.type)
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
                                <button className='btnOpcion' style={{fontFamily: 'Header'}} key={sensor.id} onClick={this.handleClickSensor.bind(this, sensor.ip)}>
                                    {sensor.name} - {sensor.ip} - {sensor.mac} - {fecha}
                                </button>
                            )
                        })
                        return(
                            <div>
                                {sensorList.length > 0 ? sensorList : <div style={{color: 'white', fontFamily: 'Header'}}>No hay sensores</div>}
                            </div>
                        )
                        
                }
                
            
            
            } else {
                return(
                    <div style={{color: 'white', fontFamily: 'Header'}}>
                        Seleccione tipo de sensor o subsistema
                    </div>
                )
            }
            
        } else {
            return(
                <div style={{color: 'white'}}>CARGANDO</div>
            )
        }
    }
}
