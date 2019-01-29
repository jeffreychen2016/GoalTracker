import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  switchLoginAndLogout = () => {
    if (this.props.authed) {
      return (            
        <LinkContainer to={'/counter'} onClick={this.props.logout}>
          <NavItem>  
            <Glyphicon glyph='log-out'/> Log Out
          </NavItem>
        </LinkContainer>)
    } else {
      return (
      <LinkContainer to={'/login'}>
        <NavItem>
          <Glyphicon glyph='log-in' /> Log In
        </NavItem>
      </LinkContainer>)
    }
  }

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Goal Tracker</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
              <NavItem>
                <Glyphicon glyph='user' /> Profile Setting
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='heart' /> Fitness
              </NavItem>
            </LinkContainer>
            {this.switchLoginAndLogout()};
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
