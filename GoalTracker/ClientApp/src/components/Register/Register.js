import React, { Component } from 'react';
import authRequests from '../../firebaseRequests/auth';
import { Link } from 'react-router-dom'; 
import './Register.css'

export class Register extends Component {
    
  state = {
    user: {
      email: 'jeffreychen2016@gmail.com',
      password: '123456',
      firstName: '',
      lastName: '',
      isActive: 1,
      isAdmin: 0,
      firebaseId: ''
    },
  };

  registerClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then(() => {
        this.props.history.push('/counter');
      })
      .catch(error => {
        console.error('there was an error when registering', error);
      });
  };


  emailChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="Login">
        <div id="login-form">
          <h1 className="text-center">Register</h1>
          <form className="form-horizontal col-sm-4 col-sm-offset-4">
          <div className="form-group">
              <div className="input-group register-table">
                <span className="input-group-addon register-input-group-addon" id="basic-addon1">
                  <span>First Name</span>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="First Name" 
                  aria-describedby="basic-addon1" 
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group register-table">
                <span className="input-group-addon register-input-group-addon" id="basic-addon1">
                  <span>Last Name</span>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Last Name" 
                  aria-describedby="basic-addon1" 
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group register-table">
                <span className="input-group-addon register-input-group-addon" id="basic-addon1">
                  <span>Email</span>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Email" 
                  aria-describedby="basic-addon1" 
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group register-table">
                <span className="input-group-addon register-input-group-addon" id="basic-addon1">
                  <span>Password</span>
                </span>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Password" 
                  aria-describedby="basic-addon1" 
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group text-center">
              <Link to="/login">Back to Login</Link>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.registerClickEvent}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
