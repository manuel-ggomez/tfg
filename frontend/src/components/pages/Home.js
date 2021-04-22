import React, {Component} from 'react';
import {connect} from "react-redux";
import {logoutUser} from '../../redux/actions/user_actions';
import Cards1 from '../Cards1';
import Cards2 from '../Cards2';
import Sidebar from '../Sidebar';
import LogIn from './LogIn';
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
                    <div>
                        <Sidebar />
                        <Cards1 />
                    </div>
                    );
            } else {
              
                return(
                    <div>
                        <Sidebar />
                        <Cards2 />
                    </div>
                );
                
                
            }
        } else {
            return(
                <div className="backgroundMain">
                    <h1 id="title">PLICA</h1>
                    <div className="mainButtons">
                        <button onClick={() => this.props.history.push('/login')} className="mainButton">Iniciar sesión</button>
                        <button onClick={() => this.props.history.push('/register')} className="mainButton">Registrarse</button>
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