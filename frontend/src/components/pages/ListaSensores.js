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
                                <button style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px'}} className='btnOpcion' onClick={this.handleClickSubsistema.bind(this, "elasticsearch")}>
                                    Elasticsearch
                                </button>
                                <button style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px'}} className='btnOpcion' onClick={this.handleClickSubsistema.bind(this, "kibana")}>
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
                                <button className='btnOpcion' style={{display: 'flex', width: '100%'}} key={sensor.id} onClick={this.handleClickSensor.bind(this, sensor.ip)}>
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '20%'}}>{sensor.name}</div>  
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '20%'}}>{sensor.ip}</div>
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '30%'}}>{sensor.mac}</div>  
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '30%'}}>{fecha}</div>
                                </button>
                            )
                        })
                        return(
                            <div style={{width: '80%'}}>
                                
                                {sensorList.length > 0 ? 
                                <>
                                <div style={{display: 'flex', color: 'white', width: '100%', textAlign: 'center', margin: '5px 5px 20px 5px'}} >
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '20%', textDecoration: 'underline'}}>Nombre</div>  
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '20%', textDecoration: 'underline'}}>Dirección IP</div>
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '30%', textDecoration: 'underline'}}>Dirección MAC</div>  
                                    <div style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', width: '30%', textDecoration: 'underline'}}>Fecha de creación</div>
                                </div>
                                {sensorList} 
                                </>
                                : <div style={{color: 'white', fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px', textAlign: 'center'}}>No hay sensores</div>}
                            </div>
                        )
                        
                }
                
            
            
            } else {
                return(
                    <div style={{color: 'white', fontFamily: 'Header', fontWeight: 'bold', fontSize: '25px'}}>
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
