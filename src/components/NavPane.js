import React, { Component } from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

export default class NavPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  

  render() {
    return (
        <div>
          <Navbar bsStyle="primary" fixedTop={false}>
            <Navbar.Header >
              <Navbar.Brand>
                <a href="#" className="custom-nav">Mujtaba Pirbhoy</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>

              <Nav bsStyle="pills" className={(this.props.flashingContact ? "contactNavFlash" : "")} activeKey={0} pullRight={true}>
                <NavItem eventKey={1} href="mailto:mujtaba.pirbhoy@mail.utoronto.ca"><i className="fa fa-envelope fa-lg " /></NavItem>
                <NavItem eventKey={1} href="https://github.com/mpirbhoy/"><i className="fa fa-github fa-lg " /></NavItem>
                <NavItem eventKey={1} href="https://ca.linkedin.com/in/pirbhoy"><i className="fa fa-linkedin fa-lg " /></NavItem>
                <NavItem eventKey={1} href="https://www.facebook.com/mujtabapirbhoy"><i className="fa fa-facebook fa-lg " /></NavItem>
                <NavItem eventKey={1} href="https://twitter.com/mmpirbhoy"><i className="fa fa-twitter fa-lg " /></NavItem>                
              </Nav>
              <Nav bsStyle="tabs" justified={true} activeKey={this.props.activeTab}>
                <NavItem eventKey={1} href="#" onClick={() => {this.props.setTab(1);}}>About Me</NavItem>
                <NavItem eventKey={2} href="#" onClick={() => {this.props.setTab(2);}}>Projects</NavItem>
                <NavItem eventKey={3} href="#" onClick={() => {this.props.setTab(3);}}>Interests</NavItem>                
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>
        </div>
    );
  }
}
