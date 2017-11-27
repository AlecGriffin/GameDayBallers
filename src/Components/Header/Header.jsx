import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';
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
            <div className="text-brand">
              <Navbar.Brand>
                <Link to='/'>Game Day Ballers</Link>
              </Navbar.Brand>
            </div>
            <div className="image-brand">
              <Navbar.Brand>
                <Link to='/'>
                <svg id="header-basketball" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.22 205.22">
                  <g id="basketball-layer" data-name="Basketball">
                    <circle className="basketball-1" cx="102.61" cy="102.61" r="102.61"/>
                    <path className="basketball-2" d="M88.55,51.43l2,.31,1.2.2c6.59,1.08,22,3.63,58.89,5.94,17.06,1.07,34.25,7.25,46.52,12.73a100.15,100.15,0,0,0-49.8-57.23c-27.6-.1-56.23,10-79.9,29.67C73.66,49.1,80.92,50.24,88.55,51.43Z"/>
                    <path className="basketball-2" d="M54.4,55.42l125.42,110.4a99.65,99.65,0,0,0,19.93-86.07C188,74.07,168.76,66.18,150.18,65c-37.23-2.34-52.9-4.92-59.6-6l-1.18-.2-2-.3C79.21,57.2,70,55.76,62.07,47.77,59.44,50.2,56.88,52.74,54.4,55.42Z"/>
                    <path className="basketball-2" d="M82.86,200.44c-7-11.47-15.29-27.74-18.52-44.53-7-36.27-11.46-51.25-13.37-57.65l-.35-1.17c-.19-.64-.38-1.29-.56-1.94-2.15-7.41-4.2-14.47-11-19.85-16.47,26-22.89,55.64-19.29,83a100.46,100.46,0,0,0,16.89,19.21A99.4,99.4,0,0,0,82.86,200.44Z"/>
                    <path className="basketball-2" d="M57.47,95.07l.34,1.15c1.95,6.5,6.5,21.72,13.54,58.34,3.52,18.31,13.79,36.42,20.9,47.31a99.7,99.7,0,0,0,82.85-30.69L49.68,60.78c-2.34,2.79-4.54,5.66-6.61,8.57C52,76.18,54.6,85.16,56.92,93.17Z"/>
                    <path className="basketball-2" d="M63.11,37.36A134,134,0,0,1,131.77,7.15a100.11,100.11,0,0,0-75.94,7.29C57.33,21.75,59.81,31.28,63.11,37.36Z"/>
                    <path className="basketball-2" d="M32.87,71.7C26.43,69.2,16.66,68,9.21,67.4a100.13,100.13,0,0,0,2.41,76.25A134.07,134.07,0,0,1,32.87,71.7Z"/>
                    <path className="basketball-2" d="M36.91,65.66c2.32-3.28,4.79-6.49,7.41-9.6L25.39,39.4A99.77,99.77,0,0,0,12.13,60.47C19.8,61.15,29.91,62.59,36.91,65.66Z"/>
                    <path className="basketball-2" d="M30.11,34,49,50.69q4.14-4.48,8.58-8.56c-3.93-6.56-6.65-16.4-8.29-23.92A99.43,99.43,0,0,0,30.11,34Z"/>
                    <path className="basketball-3" d="M201.77,113.9a130.48,130.48,0,0,1-35.12,40.44l13.17,11.59A99.22,99.22,0,0,0,201.77,113.9Z"/>
                    <path className="basketball-3" d="M36.67,177.63a99.33,99.33,0,0,0,46.19,22.93,175.72,175.72,0,0,1-10.93-20.87A129,129,0,0,1,23.36,163.4,100.08,100.08,0,0,0,36.67,177.63Z"/>
                    <path className="basketball-3" d="M175.1,171.29l-14.41-12.68A129.3,129.3,0,0,1,88.2,180.72c-2.7,0-5.38-.09-8-.25A183.1,183.1,0,0,0,92.25,202,99.67,99.67,0,0,0,175.1,171.29Z"/>
                  </g>
                </svg>
                </Link>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" inputRef={node => this.inputNode = node} onKeyUp={this.updateInput}/>
                {' '}
                <LinkContainer to={'/search/' + this.state.search}>
                  <Button type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
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

              <LinkContainer to='/visualization'>
                <NavItem eventKey={6} >Visualization</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
