import React, {Component} from 'react';
import {loginUser, resetUserError} from '../../redux/actions/user_actions';
import {connect} from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './LogIn.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
        this.login = this.login.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.user.error !== prevProps.user.error) {
            this.setState({
                error: this.props.user.error
            })
        }
    }

    login(e){
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(user)
    }
    render() {
        return(
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className='paper'>
              <Avatar className='avatar'>
              <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
              Iniciar Sesión
              </Typography>
              <form onSubmit={this.login} className='form' >
              <TextField
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => {this.setState({email: e.target.value})}} 
                  required
                  fullWidth
                  id="email"
                  label="Usuario"
                  name="email"
                  autoComplete="off"
                  autoFocus
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => {this.setState({password: e.target.value})}}
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="off"
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className='submit'
              >
                  Iniciar Sesión
              </Button>
              </form>
          </div>
          </Container>
        );
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {loginUser, resetUserError})(Login);