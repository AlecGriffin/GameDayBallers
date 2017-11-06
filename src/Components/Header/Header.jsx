import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
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
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Search</Button>
          </Navbar.Form>

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

            <LinkContainer to='/divisions'>
              <NavItem eventKey={4} >Divisions</NavItem>
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
