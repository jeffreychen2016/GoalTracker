import React, { Component } from 'react';
import authRequests from '../../firebaseRequests/auth';
import { Link } from 'react-router-dom'; 

export class Login extends Component {
    
  state = {
    user: {
      email: 'jeffreychen2016@gmail.com',
      password: '123456',
    },
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

  loginClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .loginUser(user)
      .then(() => {
        this.props.history.push('/profile');
      })
      .catch(error => {
        console.error('there was an error while trying to login', error);
      });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="Login">
        <div id="login-form">
          <h1 className="text-center">Login</h1>
          <form className="form-horizontal col-sm-4 col-sm-offset-4">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">
                  <span className="glyphicon glyphicon-user"></span>
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
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">
                  <span className="glyphicon glyphicon-lock"></span>
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
              <Link to="/register">Need to Register</Link>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.loginClickEvent}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
