import React, {Component} from 'react';
import { Router, Link, navigate } from '@reach/router'
import {getTypes, getSingleUser} from './API';

import RouteProjects from './RouteProjects';
import RouteAddProject from './RouteAddProject';
import RouteEditProject from './RouteEditProject';
import RouteSingleType from './RouteSingleType';
import RouteSingleProject from './RouteSingleProject';
import RouteAddUser from './RouteAddUser';
import RouteLogin from './RouteLogin';
import RouteNotFound from './RouteNotFound';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      types:[],
      currentUser: null
    }
  }
  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  handleLogoutClick = () => {
    localStorage.removeItem('userId')
    this.setState({currentUser:null})
    navigate('/login')
  }
  componentDidMount(){
    getTypes().then(res => this.setState({types:res.data}))

    //local storage
    var userId = localStorage.getItem('userId')

    if(userId){
      getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
    }
  }
  render(){
    var {types, currentUser} = this.state
    return (
      <div className="app">
          <div class="header">
            {
              currentUser? (<span>Welcome {currentUser.name}</span>) : null
            }
            
            <i class="fas fa-bars"></i>
            <ul class="menu">
              <Link to="/projects">All Projects</Link>
              {
                types.map(type => <Link to={'/types/'+type.id}>{type.name}</Link>)
              }
              
              {
                currentUser ? (
                  <>
                  <Link to="/projects/create">Add a project</Link>
                  <li><a onClick={this.handleLogoutClick} href="#">Logout</a></li>
                  </>
                ) : (
                  <>
                  <Link to="/login">Login</Link>
                  <Link to="/users/create">Register</Link>
                  </>
                )
              }
              
            </ul>
          </div>

          <Router>
            <RouteProjects currentUser={this.state.currentUser} path="/projects" />
            <RouteSingleType currentUser={this.state.currentUser} path="/types/:id" />
            {currentUser ? <RouteAddProject currentUser={this.state.currentUser} path="/projects/create" /> : null}
            {currentUser ? <RouteEditProject path="/projects/:id/edit" /> : null}
            <RouteSingleProject currentUser={this.state.currentUser} path="/projects/:id" />
            <RouteAddUser path="/users/create" />
            <RouteLogin setCurrentUser={this.setCurrentUser} path="/login" />
            
            <RouteNotFound default />
          </Router>
        
      </div>
    );
  }
}

export default App;
