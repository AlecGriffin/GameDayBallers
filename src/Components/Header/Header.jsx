import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  render(){
    return(
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Game Day Ballers</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to='/players'>
              <NavItem eventKey={1} >Players</NavItem>
            </LinkContainer>

            <LinkContainer to='/teams'>
              <NavItem eventKey={2} >Teams</NavItem>
            </LinkContainer>

            <LinkContainer to='/coaches'>
              <NavItem eventKey={3} >Coaches</NavItem>
            </LinkContainer>

            <LinkContainer to='/pre-nba'>
              <NavItem eventKey={4} >Pre-NBA</NavItem>
            </LinkContainer>

            <LinkContainer to='/about'>
              <NavItem eventKey={5} >About</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
