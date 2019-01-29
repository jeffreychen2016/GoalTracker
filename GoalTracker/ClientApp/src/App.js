import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login/Login';
import fbConnection from '../src/firebaseRequests/connection';

fbConnection();

export default class App extends Component {

  logout = () => {
    this.setState({authed: false});
  };

  render() {
    return (
      <Layout
        logout = {this.logout}
      >
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/login' component={Login} />
      </Layout>
    );
  }
}
