import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import NavPane from './NavPane';
import TogglePane from './TogglePane';
import Projects from './Projects';
import Interests from './Interests';
import About from './About';
import Box from './Box';
import BottomPane from './BottomPane';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab : 1,
      flashingContact: false,
      alertStates: this.getInitialAlertStates()
    }

    this.setActiveTab = this.setActiveTab.bind(this);
    this.switchToProjects = this.switchToProjects.bind(this);
    this.startFlashingContact = this.startFlashingContact.bind(this);
    this.stopFlashingContact = this.stopFlashingContact.bind(this);
  }  

  getAlerts() {
    return [{style:"primary", tab: "projects", content: <span>I'm always looking for new projects/ideas to work on. If you have something in mind, let me <a href="mailto:mujtaba.pirbhoy@mail.utoronto.ca?Subject=I%20have%20an%20interesting%20project">know</a>.</span>}];
  }

  getInitialAlertStates() {
    return this.getAlerts().map(() => {return true});
  }

  getAlertStatesHandlers() {
    return this.getAlerts().map((alert, index) => {
      return (() => {
        var updatedStates = this.state.alertStates; 
        updatedStates[index] = false;
        this.setState({alertStates:updatedStates})}).bind(this);
    });
  }

  render() {
    return (
        <div>
            <NavPane activeTab={this.state.activeTab} setTab={this.setActiveTab}
               flashingContact={this.state.flashingContact}/>
            {/* <TogglePane /> */}
            <br/>
            {/* <br/><br/><br/><br/><br/> */}
            {(
              () => {
                switch (this.state.activeTab) {
                  case 1:
                    return <About switchToProjects={this.switchToProjects} startFlashingContact={this.startFlashingContact} stopFlashingContact={this.stopFlashingContact} />;
                  case 2:
                    return <Projects alerts={this.getAlerts()} alertStates={this.state.alertStates} 
                      alertStateHandlers={this.getAlertStatesHandlers()}/>;
                  case 3:
                    return  <Interests />;
                }
              }
            )()
            }
            {/* <BottomPane flashingContact={this.state.flashingContact} /> */}
        </div>
    );
  }

  setActiveTab(tab) {
    this.setState({activeTab: tab});
  }

  switchToProjects() {
    this.setActiveTab(2);
    window.scrollTo(0, 0);
  }

  startFlashingContact() {
    this.setState({flashingContact: true});
  }

  stopFlashingContact() {
    this.setState({flashingContact: false});
  }
}
