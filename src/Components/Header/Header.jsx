import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      textInput : ""
    }
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput(event){
    this.setState({textInput: event.target.value});
    console.log(this.textInput)
  }

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
              <FormControl type="text" placeholder="Search" value={this.state.textInput} onChange={this.focusTextInput}/>
              {' '}
              <Button onClick={this.focusTextInput} type="submit">Search</Button>
            </FormGroup>
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
