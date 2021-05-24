import React, {Component} from 'react';
import {registerUser, resetUserError, resetUserSuccess} from '../../redux/actions/user_actions';
import {connect} from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './LogIn.css';
import '../Cards.css';



class Register2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: ""
        }
        this.register = this.register.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    register(e){

        e.preventDefault()

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.setState({
            name: "",
            email: "",
            password: "",
            password2: ""
        })

        this.props.registerUser(user, true)

    }

    closeAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.resetUserSuccess()
        this.props.resetUserError()
    }

    render() {
        return(
            <>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <div className='subtituloPagina'>
                    Crear usuario
                    </div>
                    <form onSubmit={this.register} className='form' noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="off"
                            name="firstName"
                            variant="filled"
                            onChange={(e) => {this.setState({name: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            id="firstName"
                            label="Nombre"
                            autoFocus
                            value={this.state.name}
                            InputProps={{
                                style: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            onChange={(e) => {this.setState({email: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            id="email"
                            label="Usuario"
                            name="email"
                            autoComplete="off"
                            value={this.state.email}
                            InputProps={{
                                style: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            onChange={(e) => {this.setState({password: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="off"
                            value={this.state.password}
                            InputProps={{
                                style: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            onChange={(e) => {this.setState({password2: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            name="password2"
                            label="Repetir contraseña"
                            type="password"
                            id="password2"
                            autoComplete="off"
                            value={this.state.password2}
                            InputProps={{
                                style: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className='submit'
                        style={{marginTop: '10px'}}
                    >
                        Crear
                    </Button>
                    </form>
                </div>
                </Container>
                <Snackbar open={this.props.user.success !== ""} autoHideDuration={3000} onClose={this.closeAlert}>
                    <MuiAlert onClose={this.closeAlert} severity="success" variant="filled">
                        {this.props.user.success}
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={this.props.user.error !== ""} autoHideDuration={3000} onClose={this.closeAlert}>
                    <MuiAlert onClose={this.closeAlert} severity="error" variant="filled">
                        {this.props.user.error}
                    </MuiAlert>
                </Snackbar>
            </>
        );
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {registerUser, resetUserError, resetUserSuccess})(Register2);