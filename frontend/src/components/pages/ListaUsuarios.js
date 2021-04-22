import React, {Component} from 'react';
import {connect} from "react-redux";
import {listUsers, deleteUser} from '../../redux/actions/user_actions';
import Sidebar from '../Sidebar';

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

    render(){
        let userList = this.props.user.userlist.map((user) => {
            return (
                <div>
                    {user.id}
                    {user.name}
                    {user.email}
                    {!user.isAdmin ? <button onClick={this.deleteUser.bind(this, user.id)}>Eliminar</button> : null}
                </div>
            )
        })

        if (this.state.users === null) {
            return(
                <div>CARGANDO</div>
            );
        } else {
            return(
                <div>

                    <Sidebar />
                    {userList}
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {listUsers, deleteUser})(ListaUsuarios);