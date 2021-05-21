import React, {Component} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


export default class Monitorizar extends Component {

    
    render() {

        return(

            <div>
                Estado: {this.props.active ? "Activo"  : "Inactivo" } {this.props.active ? <FiberManualRecordIcon style={{backgroundColor: 'green'}}/> : <div><FiberManualRecordIcon style={{backgroundColor: 'red'}}/></div>}
                <button>{this.props.active ? <PlayArrowIcon style={{backgroundColor: 'green'}}/> : <StopIcon style={{backgroundColor: 'red'}}/>}</button>
            </div>

        )
        
    }
}