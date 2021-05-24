import React from 'react';
import {connect} from 'react-redux';
import {editUser, changePassword} from '../../redux/actions/user_actions';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Cards.css';

class Profile2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            oldPassword: "",
            newPassword: "",
            newPassword2: "",
            error: ""
        }
        this.editUser = this.editUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    componentDidMount() {
        this.setState({
            name: this.props.user.user.name,
            email: this.props.user.user.email
        })
    }

    componentDidUpdate(prevProps){
        if (this.props.user.error !== prevProps.user.error) {
            this.setState({
                error: this.props.user.error
            })
        }
    }

    editUser(e){
        e.preventDefault();
        const id = this.props.user.user.id;
        const user = {
            name: this.state.name,
            email: this.state.email
        }
        this.props.editUser(user, id)
    }

    changePassword(e){
        e.preventDefault();
        const id = this.props.user.user.id;
        const passwords = {
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword,
            newPassword2: this.state.newPassword2
        }
        this.props.changePassword(passwords, id)
    }

    render() {
        return(
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <div className='subtituloPagina'>
                Editar perfil
                </div>
                    <form onSubmit={this.editUser} id="inputForm">
                        <TextField
                            variant="filled"
                            margin="normal"
                            onChange={(e) => this.setState({name: e.target.value})} 
                            value={this.state.name} 
                            required
                            fullWidth
                            id="firstName"
                            label="Nombre"
                            name="nombre"
                            autoComplete="nombre"
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
                            onChange={(e) => this.setState({email: e.target.value})} 
                            value={this.state.email} 
                            required
                            fullWidth
                            id="email"
                            label="Usuario"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                            disabled={this.state.name === this.props.user.user.name && this.state.email === this.props.user.user.email}
                        >
                            Guardar cambios
                        </Button>
                    
                    </form>
                    <form onSubmit={this.changePassword} id="inputForm">
                        <TextField
                            variant="filled"
                            margin="normal"
                            onChange={(e) => this.setState({oldPassword: e.target.value, error: ""})}
                            required
                            fullWidth
                            name="password"
                            label="Contraseña actual"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                style: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                        <div style={{display:'flex'}}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                onChange={(e) => this.setState({newPassword: e.target.value, error: ""})}
                                required
                                fullWidth
                                name="password"
                                label="Nueva contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                style={{ width: '47%', marginRight: 'auto'}}
                                InputProps={{
                                    style: {
                                        backgroundColor: 'white'
                                    }
                                }}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                onChange={(e) => this.setState({newPassword2: e.target.value, error: ""})}
                                required
                                fullWidth
                                name="password"
                                label="Repita contraseña"
                                type="password"
                                id="password"
                                autoComplete="repeat-new-password"
                                style={{ width: '47%', marginLeft: 'auto'}}
                                InputProps={{
                                    style: {
                                        backgroundColor: 'white'
                                    }
                                }}
                            />
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className='submit'
                            disabled={this.state.newPassword === this.state.oldPassword}
                        >
                            Cambiar contraseña
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

export default connect(mapStateToProps, {editUser, changePassword})(Profile2);