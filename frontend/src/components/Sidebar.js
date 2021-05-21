import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import {connect} from "react-redux";
import {logoutUser} from '../redux/actions/user_actions';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { SidebarData2 } from './SidebarData2';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Navbar.css';
import './Sidebar.css';
import '../App.css';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebar: false,
      interval: null,
      time: ""
    }

    this.showSidebar = this.showSidebar.bind(this)
    this.logout = this.logout.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.drop = this.drop.bind(this)

  }

  componentDidMount(){
    this.refrescaReloj()
    let interval = setInterval(() => {
      this.refrescaReloj()
    }, 1000);
    this.setState({
      interval: interval,
    })
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  showSidebar() {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  refrescaReloj(){
    const day = new Date(Date.now()).toLocaleDateString('es-ES')
    const time = new Date(Date.now()).toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    this.setState({
      time: day + ' ' + time
    })
  }

  logout(){
      document.getElementById("myDropdown").classList.remove("show")
      this.props.logoutUser()
  }

  editProfile(){
      document.getElementById("myDropdown").classList.remove("show")
      this.props.history.push('/administracion/gestion-usuarios/editar-perfil')
  }

  drop(){
      if (!document.getElementById("myDropdown").classList.contains('show')) {
          document.getElementById("myDropdown").classList.add("show")
      }
  }

  render(){

    window.onmousemove = (e) => {
      if (document.getElementsByClassName('dropbtn')[0] !== undefined || document.getElementsByClassName('dropdown-content')[0] !== undefined) {
          if (!document.getElementsByClassName('dropbtn')[0].contains(e.target) && !document.getElementsByClassName('dropdown-content')[0].contains(e.target)) {
              let dropdown = document.getElementById("myDropdown")
              if (dropdown.classList.contains('show')) {
                  dropdown.classList.remove('show')
              }
          }
      }
    }

    const SidebarNav = {
      background: '#15171c',
      width: '250px',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: '0',
      left: this.state.sidebar ? '0' : '-100%',
      transition: '350ms',
      zIndex: '10'
    }

    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='nav'>
            <Link to='#' className='nav-icon'>
              <FaIcons.FaBars onClick={this.showSidebar} />
            </Link>
            <nav className='navbar'>
              <ul className='nav-menu'>
                <li className='nav-item'>
                  <div className='titulo' style={{ color: '#fff' }}>
                    Consola de Mando y Control PLICA 
                  </div>
                </li>

                <li className='nav-item'>
                  <div id='hora' style={{ color: '#fff' }}>
                    {this.state.time}
                  </div>
                </li>
                
                <div className="dropdown">
                  <button className="dropbtn" onMouseEnter={this.drop}><div style={{display: "flex", justifyContent: "center"}}>{this.props.user.user.name}<ArrowDropDownIcon/></div></button>
                  <div className="dropdown-content" id="myDropdown">
                      <div className="navDrop"><button className="navButtonDrop" id="navDrop1" onClick={this.editProfile}><h5 id="navDrop1Text">Editar perfil</h5></button></div>
                      <div className="navDrop"><button className="navButtonDrop" id="navDrop2" onClick={this.logout}><h5 id="navDrop2Text">Cerrar sesión</h5></button></div>
                  </div>
                </div>
                
                
              </ul>
            </nav>
          </div>
          <nav style={SidebarNav} sidebar={this.state.sidebar}>
            <div style={{backgroundColor: '#152238', width: '100%'}}>
              <Link to='#' className='nav-icon'>
                <AiIcons.AiOutlineClose onClick={this.showSidebar} />
              </Link>
              {this.props.user.user.isAdmin ? SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              }) : SidebarData2.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              }) }
            </div>
          </nav>
        </IconContext.Provider>
      </>
    );
  };
};



function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps, {logoutUser})(withRouter(Sidebar));
