import React, {Component} from 'react';
import {navigate} from '@reach/router'
import {addUsers} from './API';
import { ValidatorForm } from 'react-form-validator-core';

import TextValidator from './TextValidator';

class RouteAddUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      username:'',
      password:'',
      email:'',
    }
  }

  handleInputChange = (e) => {
    var value = e.target.value
    var inputName = e.target.name


    var  stateData =  {}
    stateData[inputName] = value

    this.setState(stateData)
  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(this.form);
    var data = {
      name:formData.get('name'),
      username:formData.get('username'),
      password:formData.get('password'),
      email:formData.get('email'),
    }

    addUsers(data).then(res => navigate('/login'))
  
  }
  formError = (inputs) => {
    console.log(inputs)
  
  }

  render(){
    return (
      <div class="main">
        <h3>Register</h3>
        <ValidatorForm onError={this.formError} onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <TextValidator type="text" 
              className="form-control" 
              name="name" 
              id="name" 
              onChange={this.handleInputChange}
              value={this.state.name}
              placeholder="Enter name"
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
              />
          </div>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <TextValidator 
              type="text" 
              className="form-control" 
              name="username" 
              id="username" 
              placeholder="Enter username"
              onChange={this.handleInputChange}
              value={this.state.username}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}

              />
          </div>

          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Enter password"/>
          </div>

          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Enter email"/>
          </div>


          <button type="submit" className="btn btn-primary">Register</button>
        </ValidatorForm>
      </div>
    );
  }
}

export default RouteAddUser;
