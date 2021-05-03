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
import Sidebar from '../Sidebar';
import './LogIn.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            password2: "",
            error: ""
        }
        this.register = this.register.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.user.error !== prevProps.user.error) {
            this.setState({
                error: this.props.user.error
            })
        }
    }

    register(e){
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(user, this.props.admin)
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
                {this.props.admin ? <Sidebar/> : null}
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='paper'>
                    <Avatar className='avatar'>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Crear usuario
                    </Typography>
                    <form onSubmit={this.register} className='form' noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="off"
                            name="firstName"
                            variant="outlined"
                            onChange={(e) => {this.setState({name: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            id="firstName"
                            label="Nombre"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            onChange={(e) => {this.setState({email: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            id="email"
                            label="Usuario"
                            name="email"
                            autoComplete="off"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            onChange={(e) => {this.setState({password: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="off"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            onChange={(e) => {this.setState({password2: e.target.value}); this.props.resetUserError()}}
                            required
                            fullWidth
                            name="password2"
                            label="Repetir contraseña"
                            type="password"
                            id="password2"
                            autoComplete="off"
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='submit'
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

export default connect(mapStateToProps, {registerUser, resetUserError, resetUserSuccess})(Register);