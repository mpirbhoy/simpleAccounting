import React, { Component } from 'react';
import Box from './Box';
import {Row, Col, Grid, Button, Jumbotron, Label, Panel, Table, ProgressBar, Well} from 'react-bootstrap';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
  }  

  render() {
    return (
        <div>
            <Grid>
              <Row className="show-grid">
                <Col md={1}/>
                <Col xs={12} md={3}>
                  <img className="img-responsive" height="192" width="192" src="img/profile.png" alt=""/>
                </Col>
                <Col md={7}>
                <Panel>
                    <h3>Welcome to my website!</h3>
                    <p>My name is Mujtaba Pirbhoy and I am a software engineer/indie-(non-game)-developer living in Toronto, Canada.</p>
                    <p>Following are some roles that I assume.</p>
                </Panel>
                </Col>
                
              </Row>
              <br/>
              <Row className="show-grid">
                <Col xs={12} md={4}><Box title="Student"
                    content={
                        <div>                            
                            <div className="floatDivL">
                                <i className="fa fa-graduation-cap fa-3x" />
                            </div>
                            
                            <div> 
                                <strong>Hon. BSc., University of Toronto</strong>
                                <p>&nbsp;&nbsp;Graduated: June 2017</p>
                                <p>&nbsp;&nbsp;Specialist in Computer Science</p>
                            </div>
                            <br/>    
                            <Table striped bordered condensed>
                            <thead>
                                <tr>
                                    <th>
                                        <i className="fa fa-book fa-2x" />
                                        <strong>&nbsp;Actively Learning</strong>  
                                    </th>
                                    <th>
                                        &nbsp;&nbsp;
                                        <i className="fa fa-search fa-2x" />
                                        <strong>&nbsp;&nbsp;Exploring</strong>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i className="fa fa-circle fa-xxs" />&nbsp;Java</td>
                                    <td><i className="fa fa-circle fa-xxs" />&nbsp;Chatbots</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-circle fa-xxs" />&nbsp;Js, React</td>
                                    <td><i className="fa fa-circle fa-xxs" />&nbsp;Voice Assistants</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-circle fa-xxs" />&nbsp;Software Design</td>
                                    <td><i className="fa fa-circle fa-xxs" />&nbsp;Web Assembly (WASM)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><i className="fa fa-circle fa-xxs" />&nbsp;Machine Learning</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    }                    
                /></Col>
                <Col xs={12} md={4}><Box title="Engineer"
                content= {
                    <div>
                        <div className="floatDivL">
                            <i className="fa fa-briefcase fa-3x" />
                        </div>
                        
                        <div> 
                            <span>Currently working as a </span><br/>
                            <strong>&nbsp;&nbsp;Software Engineer at Citibank</strong>
                        </div>
                        <br/>
                        <div className="floatDivL">
                            <a href="/res/Resume.pdf"><i className="fa fa-file-text fa-2x" />&nbsp;&nbsp;Click here</a> to see my latest resume.
                        </div>
                        <br/><br/>
                        <h4><Label onMouseEnter={this.props.startFlashingContact} onMouseLeave={this.props.stopFlashingContact}
                         bsStyle="info">Open to new opportunities</Label></h4>
                    </div>
                }
                /></Col>

                <Col xs={12} md={4}><Box title="Indie-dev (non-game)"
                    content = {
                        <div>
                            <div className="floatDivL">
                                <i className="fa fa-flash fa-3x" />
                            </div>

                            <div> 
                                <span>Spending most of my free time these days on  </span><br/>
                                <div>
                                    <strong>Four Quads (productivity app)</strong>
                                    <span> (React, Node.js, Google Dialogflow, ... )</span>
                                </div>
                            </div>
                            <br/>
                            
                            
                            <div>
                                I'm also working on some react modules. <strong>React-live-timer</strong> is 
                                published on NPM-JS and a couple more to come soon too. 
                            </div>
                            <br/>
                            <span id="switchToProjects" onClick={() => {this.props.switchToProjects();}}>Click here</span> to find out more about my projects
                            <br/>
                            <h4><Label  onMouseEnter={this.props.startFlashingContact} 
                                onMouseLeave={this.props.stopFlashingContact} bsStyle="info">Open to new projects/ideas
                            </Label></h4>
                        </div>
                    }
                /></Col>
              </Row>
              <br/>

            </Grid>
            
        </div>
    );
  }
}
