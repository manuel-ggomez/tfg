import React, {Component} from 'react';
import {connect} from "react-redux";
import {listUsers, deleteUser, validateUser} from '../../redux/actions/user_actions';
import Sidebar from '../Sidebar';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './ListaUsuarios.css'

class ListaUsuarios extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: null
        }
    }

    componentDidMount(){
        this.props.listUsers();
    }

    componentDidUpdate(prevProps){
        if (prevProps.user.userlist !== this.props.user.userlist) {
            this.setState({
                users: this.props.user.userlist
            })
        }
    }

    deleteUser(id){
        this.props.deleteUser(id)
    }

    validateUser(id){
        this.props.validateUser(id)
    }

    render(){
        let userList = this.props.user.userlist.map((user) => {
            return (
                <div className='usuario'>
                    <div className='id'>{user.id}</div>
                    <div className='name'>{user.name}</div>
                    <div className='email'>{user.email}</div>
                    <div className='validar'>{!user.validated ? <button className='validarBtn' onClick={this.validateUser.bind(this, user.id)}><CheckCircleIcon/></button> : <div className='validar'/>}</div>
                    <div className='borrar'>{!user.isAdmin ? <button className='delete' onClick={this.deleteUser.bind(this, user.id)}><DeleteIcon/></button> : <div className='borrar'/>}</div>                  
                </div>
            )
        })

        if (this.state.users === null) {
            return(
                <div style={{color: 'white'}}>CARGANDO</div>
            );
        } else {
            return(
                <div>
                    <Sidebar />
                    <div style={{backgroundColor: '#203354'}} className='listaUsuarios'>
                        <h1 style={{color: 'white'}}>Usuarios registrados en el sistema</h1>
                        {userList}
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {listUsers, deleteUser, validateUser})(ListaUsuarios);