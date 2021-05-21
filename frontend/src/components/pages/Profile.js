import React from 'react';
import {connect} from 'react-redux';
import {editUser, changePassword} from '../../redux/actions/user_actions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Sidebar from '../Sidebar';

class Profile extends React.Component {
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
            <div style={{backgroundColor: '#203354', minHeight: '110vh'}}>
                <Sidebar />
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='paper'>
                    <Avatar className='avatar'>
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{color: 'white'}}>
                    Editar perfil
                    </Typography>
                        <form onSubmit={this.editUser} id="inputForm">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                onChange={(e) => this.setState({name: e.target.value})} 
                                value={this.state.name} 
                                required
                                fullWidth
                                id="nombre"
                                label="Nombre"
                                name="nombre"
                                autoComplete="nombre"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
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
                            />
                        
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className='submit'
                                disabled={this.state.name === this.props.user.user.name && this.state.email === this.props.user.user.email}
                            >
                                Guardar cambios
                            </Button>
                        
                        </form>
                        <form onSubmit={this.changePassword} id="inputForm">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                onChange={(e) => this.setState({oldPassword: e.target.value, error: ""})}
                                required
                                fullWidth
                                name="password"
                                label="Contraseña actual"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                onChange={(e) => this.setState({newPassword: e.target.value, error: ""})}
                                required
                                fullWidth
                                name="password"
                                label="Nueva contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                onChange={(e) => this.setState({newPassword2: e.target.value, error: ""})}
                                required
                                fullWidth
                                name="password"
                                label="Repita nueva contraseña"
                                type="password"
                                id="password"
                                autoComplete="repeat-new-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className='submit'
                                disabled={this.state.newPassword === this.state.oldPassword}
                            >
                                Cambiar contraseña
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
            
        );
    }
}


function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {editUser, changePassword})(Profile);