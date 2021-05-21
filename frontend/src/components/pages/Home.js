import React, {Component} from 'react';
import {connect} from "react-redux";
import {logoutUser} from '../../redux/actions/user_actions';
import Cards1 from '../Cards1';
import Cards2 from '../Cards2';
import Sidebar from '../Sidebar';
import './Home.css'


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
                    <div style={{backgroundColor: '#203354'}}>
                        <Sidebar />
                        <Cards1 />
                    </div>
                    );
            } else {
              
                return(
                    <div style={{backgroundColor: '#203354'}}>
                        <Sidebar />
                        <Cards2 />
                    </div>
                );
                
                
            }
        } else {
            return(
                <div className="backgroundMain" style={{backgroundColor: '#203354', height: '100vh'}}>
                    <h1 id="title" style={{color: 'white'}}>Consola de Mando y Control PLICA</h1>
                    <div className="mainButtons">
                        <button onClick={() => this.props.history.push('/login')} className="mainButton1">Iniciar sesión</button>
                        <button onClick={() => this.props.history.push('/register')} className="mainButton2">Registrarse</button>
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