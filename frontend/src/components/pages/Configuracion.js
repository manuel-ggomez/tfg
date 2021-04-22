import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from '../Sidebar';
import Sensors from './Sensors'
import './Home.css'


class Configuracion extends Component {
    
    render() {
        return(
            <>
                <Sidebar/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1>Configuración de parámetros del sistema</h1>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <div style={{display: 'flex', flexGrow: '1'}}>

                        </div>
                        <Sensors/>
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