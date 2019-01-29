import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login/Login';
import firebase from 'firebase';
import fbConnection from '../src/firebaseRequests/connection';
import authRequests from '../src/firebaseRequests/auth';

fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/counter', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

export default class App extends Component {

  state = {
    authed: false
  }

  logout = () => {
    authRequests.logoutUser().then(() => {
      this.setState({authed: false});
    });   
  };

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      };
    });
  };

  componentWillUnmount () {
    this.removeListener();
  }

  render() {
    return (
      <Layout
        logout={this.logout}
        authed={this.state.authed}
      >
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute 
            path='/counter' 
            component={Counter} 
            authed={this.state.authed}
          />
          <PrivateRoute 
            path='/fetchdata' 
            component={FetchData} 
            authed={this.state.authed}
          />
          <PublicRoute 
            path='/login' 
            component={Login} 
            authed={this.state.authed}
          />
        </Switch>
      </Layout>
    );
  }
}
