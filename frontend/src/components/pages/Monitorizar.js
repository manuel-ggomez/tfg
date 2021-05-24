import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {runScript, stopScript} from '../../redux/actions/sensor_actions';
import './Monitorizar.css';


class Monitorizar extends Component {

    
    render() {

        return(

            <div className='estado' style={{boxShadow: this.props.sensor.scriptState ? "0 0 20px 1px green"  : "0 0 20px 1px red" }}>
                Estado: {this.props.sensor.scriptState ? "Activo"  : "Inactivo" } 
                {this.props.sensor.scriptState ?
                <button className='btnScript' onClick={()=>{this.props.stopScript()}}><StopIcon fontSize='large' style={{color: 'red'}}/></button>
                :
                <button className='btnScript' onClick={()=>{this.props.runScript()}}><PlayArrowIcon fontSize='large' style={{color: 'green'}}/></button>
                }
            </div>

        )
        
    }
}

function mapStateToProps(state) {
    return { ...state };
  }
  
  export default connect(mapStateToProps, {runScript, stopScript})(Monitorizar);