import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/pages/LogIn';
import Sensores from './components/pages/Sensores';
import Configuracion from './components/pages/Configuracion';
import RiesgoDinamico from './components/pages/RiesgoDinamico';
import ConsultaDatos from './components/pages/ConsultaDatos';
import GestionUsuarios from './components/pages/GestionUsuarios';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import ListaUsuarios from './components/pages/ListaUsuarios';


class App extends React.Component {
  render(){
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/login' render={() => !this.props.user.authenticated ? <Login/> : <Redirect to="/" />}/>
          <Route exact path='/register' render={() => !this.props.user.authenticated ? <Register admin={false}/> : <Redirect to="/" />}/>
          <Route exact path='/gestion/sensores' render={() => this.props.user.authenticated ? <Sensores/> : <Redirect to="/" />} />
          <Route exact path='/gestion/configuracion' render={() => this.props.user.authenticated ? <Configuracion/> : <Redirect to="/" />} />
          <Route exact path='/visualizacion/riesgo-dinamico' render={() => this.props.user.authenticated ? <RiesgoDinamico/> : <Redirect to="/" />} />
          <Route exact path='/visualizacion/consulta-datos' render={() => this.props.user.authenticated ? <ConsultaDatos/> : <Redirect to="/" />} />
          <Route exact path='/administracion/gestion-usuarios' render={() => this.props.user.authenticated ? <GestionUsuarios/> : <Redirect to="/" />} />
          <Route exact path='/administracion/gestion-usuarios/lista-usuarios' render={() => this.props.user.authenticated ? <ListaUsuarios/> : <Redirect to="/" />}/>
          <Route exact path='/administracion/gestion-usuarios/editar-perfil' render={() => this.props.user.authenticated ? <Profile/> : <Redirect to="/" />}/>
          <Route exact path='/administracion/gestion-usuarios/crear-usuario' render={() => this.props.user.authenticated ? <Register admin={true}/> : <Redirect to="/" />}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);
