import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Breadcrumb, FormGroup, Button, FormControl} from 'react-bootstrap';

export default class BottomPane extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }  
  render() {
    return (
      <div id="notifPanel">
           <Navbar bsStyle="primary" fixedBottom={true}>
           
            <Navbar.Toggle>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Contact Me</a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar.Toggle>
            <Navbar.Collapse>
              {/* <Nav pullLeft={true}>
                <Navbar.Form >
                    <FormGroup>
                      <FormControl type="text" placeholder="Bot goes here" size="40" />
                    </FormGroup>                    
                  </Navbar.Form>
              </Nav>           
              <Nav>
                <br/>
                <span className="bottomPaneSpans">Follow what is meaningful, not what is expedient</span>  
              </Nav> */}
              <Nav bsStyle="pills" className={(this.props.flashingContact ? "contactNavFlash" : "")} activeKey={0} pullRight={true}>
                <NavItem eventKey={1} href="#"><i className="fa fa-envelope fa-lg " /></NavItem>
                <NavItem eventKey={1} href="#"><i className="fa fa-github fa-lg " /></NavItem>
                <NavItem eventKey={1} href="#"><i className="fa fa-linkedin fa-lg " /></NavItem>
                <NavItem eventKey={1} href="#"><i className="fa fa-facebook fa-lg " /></NavItem>
                <NavItem eventKey={1} href="#"><i className="fa fa-twitter fa-lg " /></NavItem>                
              </Nav>
              
            </Navbar.Collapse> 
          </Navbar>
          
      </div>
    );
  }

}
