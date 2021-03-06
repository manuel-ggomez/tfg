import React, {Component} from 'react';
import {connect} from "react-redux";
import {logoutUser} from '../../redux/actions/user_actions';
import Cards1 from '../Cards1';
import Cards2 from '../Cards2';
import Sidebar from '../Sidebar';
import './Home.css';


class Home extends Component {
    constructor(props){
      super(props);
      this.logout = this.logout.bind(this);
    }

    logout(){
      this.props.logoutUser()
    }

    
    render() {

        if (this.props.user.authenticated) {
            if (this.props.user.user.isAdmin) {
                return(
                    <div style={{backgroundColor: '#203354', height: '100vh'}}>
                        <Sidebar />
                        <Cards1 />
                    </div>
                    );
            } else {
              
                return(
                    <div style={{backgroundColor: '#203354', height: '100vh'}}>
                        <Sidebar />
                        <Cards2 />
                    </div>
                );
                
                
            }
        } else {
            return(
                <div className="backgroundMain" style={{backgroundColor: '#203354', height: '100vh'}}>
                    <div className="tituloPrincipal">Consola M&C PLICA</div>
                    <div className="mainButtons" style={{fontFamily: 'Header'}}>
                        <button style={{fontFamily: 'Header', fontSize: '25px'}} onClick={() => this.props.history.push('/login')} className="mainButton1">Iniciar sesión</button>
                        <button style={{fontFamily: 'Header', fontSize: '25px'}} onClick={() => this.props.history.push('/register')} className="mainButton2">Registrarse</button>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {logoutUser})(Home);