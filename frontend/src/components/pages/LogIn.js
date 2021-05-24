import React, {Component} from 'react';
import {loginUser, resetUserError} from '../../redux/actions/user_actions';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Sidebar from '../Sidebar';
import './LogIn.css';
import { Divider } from '@material-ui/core';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""

        }
        this.login = this.login.bind(this);
        this.closeAlert = this.closeAlert.bind(this)
    }

    login(e){
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(user)
    }

    closeAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.resetUserError()
    }


    render() {
        return(
            <div style={{backgroundColor: '#203354', minHeight: '100vh'}}>
                {this.props.admin ? <Sidebar/> : <div style={{backgroundColor: '#203354', width: '100%', height: '10vh'}}/>}
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='paper'>

                    <div style={{color: 'white', fontFamily: 'Header', textAlign: 'center', fontSize: '30px'}}>
                    Iniciar Sesión
                    </div>
                    <form onSubmit={this.login} className='form' >
                    <TextField
                        variant="filled"
                        margin="normal"
                        onChange={(e) => {this.setState({email: e.target.value})}} 
                        required
                        fullWidth
                        id="email"
                        label="Usuario"
                        name="email"
                        autoComplete="off"
                        autoFocus
                        InputProps={{
                            style: {
                                backgroundColor: 'white'
                            }
                        }}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        onChange={(e) => {this.setState({password: e.target.value})}}
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="off"
                        InputProps={{
                            style: {
                                backgroundColor: 'white'
                            }
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className='submit'
                        
                    >
                        Iniciar Sesión
                    </Button>
                    </form>
                    
                        <Snackbar open={this.props.user.error !== ""} autoHideDuration={3000} onClose={this.closeAlert}>
                            <MuiAlert onClose={this.closeAlert} severity="error" variant="filled">
                                {this.props.user.error}
                            </MuiAlert>
                        </Snackbar>
                </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {loginUser, resetUserError})(Login);