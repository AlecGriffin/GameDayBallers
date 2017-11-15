import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Header extends Component {
  constructor(props){
    super(props)
    this.updateInput = this.updateInput.bind(this)

    this.state = {
      search: ''
    }
  }

  //update state to new input text value
  updateInput(event){
    this.setState({
      search: this.inputNode.value
    })
  }

  render(){

    return(
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              {/* <img src='https://i.imgur.com/ptTJXyw.png' width={50} height={50}/> */}
              <Link to='/'>Game Day Ballers</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                {/*
                  * CODE: inputRef={node=> this.inputNode = node
                  *
                  * This code creates a reference to the
                  * <input></input> component contained by the FormControl component.
                  * Access the text within the search box using: this.inputNode.value
                  */}
                <FormControl type="text" placeholder="Search" inputRef={node => this.inputNode = node} onKeyUp={this.updateInput}/>
                {' '}
                <LinkContainer to={'/search/' + this.state.search}>
                  <Button type="submit">Search</Button>
                </LinkContainer>
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
