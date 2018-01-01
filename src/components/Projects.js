import React, { Component } from 'react';
import Box from './Box';
import {Modal, Button, OverlayTrigger, Row, Alert, Col, Grid, Well,FormGroup, ControlLabel,FormControl, Thumbnail, Tab, Nav, NavItem} from 'react-bootstrap';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupByKey: "active",
      projectModalIndex: -1
    }
    this.setModalIndex = this.setModalIndex.bind(this);
  }  

  getProjects() {
      return [{name: "Four Quads",
      src:"img/projects/wip.png", 
      descr: "Time management app based on the principles of effective time management by Eisenhower/Stephen Covey",
      tech:"React, HTML5, CSS3, Webpack, BabelJS, Bootstrap, Node.js, Express.js, MongoDB, Google Dialogflow",
      date:"December 2017 - Present",
      active: true,
      effort: 4},
      {name: "Website v2",
      src:"img/projects/website.png", 
      descr: "Updated website to new layout",
      tech:"React, HTML5, CSS3, Webpack, BabelJS, Bootstrap, Node.js, Express.js, MongoDB",
      date:"December 2017 - Present",
      link:"https://www.mpirbhoy.com",
      active: true,
      effort: 2},
      {name: "Timer ",
      src:"img/projects/timer2.gif", 
      descr: "React Live Timer (Hourglass animation for countdown) - Published to NPM!",
      tech:"React, HTML5, HTML Canvas, CSS3, Webpack, BabelJS",
      date:"December 2017 - Present",
      link:"https://www.npmjs.com/package/react-live-timer",
      active: true,
      effort: 2},
      {name: "U of T Chatbot",
      src:"img/projects/chatbot.png", 
      descr: "Answers questions related to University courses, professors, buildings etc...",
      tech:"Node.js, Express.js, MongoDB, Facebook Messenger API",
      date:"July 2016 - Present",
      link:"https://www.facebook.com/U-of-T-Chatbot-236795400023076",
      active: true,
      effort:3 },
    
      {name: "Course God",
      src:"img/projects/CourseGod.png", 
    descr: "Worked in a team of 3 to implement a timetable planner for York University. ",
    tech:"HTML5, CSS3, jQuery, Node.js, Express.js, MongoDB",
    date: "January 2016",
    link:"http://www.coursegod.org",
    active: false,
      effort: 3 },

    {name: "Tutor 4 U",
      src:"img/projects/Tutor4U.png", 
      descr: "Worked in a team to create a Tutor-Tutee matching service for U of T students.",
      tech:"HTML5, CSS3, jQuery, Node.js, Express.js, MongoDB",
      date:"December 2015",
      link:"https://tutors4you.herokuapp.com",
      active: false,
      effort: 3 },

      {name: "Bug Exterminate Game",
      src:"img/projects/bugExterminate.png", 
      descr: "Developed a game where user has to click on bugs to exterminate them.",
      tech:"HTML5, HTML Canvas, CSS3, Node.js, Express.js",
      date:"October 2015",
      active: false,
      effort: 2}
    ];
  }

  setModalIndex(index) {
    this.setState({projectModalIndex: index});
  }

  reduceTo2DArray(accumulator, currentValue, currentIndex) {
    if (currentIndex % 3 == 0) {
      accumulator.push([currentValue]);
    } else {
      accumulator[Math.floor(currentIndex / 3)].push(currentValue);
    }
    return accumulator;
  };

  mapProjectRow(projectRow) {
    return (
      <Row>
        {
          projectRow.map((project) => {
            return (
              <Col md={4}>   
                <Thumbnail src={project.src} className="img-responsive project-thumbnail" alt="" onClick={() => {this.setModalIndex(project.index);}}>
                  <h4 className="projectSpan">{project.name}</h4>
                  <p className="projectSpan">{project.descr}</p>
                  <p className="projectSpan">Tech: <strong>{project.tech}</strong>
                  </p>
                  <p className="projectSpan">
                  Date: <strong> {project.date}</strong></p>
                  <p className="projectSpan">
                    Effort: <i className={project.effort > 0 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                    <i className={project.effort > 1 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                    <i className={project.effort > 2 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                    <i className={project.effort > 3 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                    <i className={project.effort > 4 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                  </p>
                  

                  { 
                    (typeof project.link != 'undefined' ? 
                      <p className="projectSpan">Link: <a href={project.link}>{project.link}</a> </p> : <span/>)                                
                  }
                </Thumbnail>
              </Col>
            )
          })      
        }
        </Row>

    )
  }
  
  getGroupByValues() {
    return {active:{filter: (project) => {return project.active;}, trueLabel: "Active", falseLabel: "Inactive"},
            all:{filter: () => {return true;}, trueLabel: "All"},
            effort: {filter:(project) => {return project.effort >= 3;}, trueLabel:"High Effort", falseLabel: "Low Effort"}
    };
  }

  render() {
    return (
        <div>
            {
              this.props.alerts.filter((alert, index) => {return this.props.alertStates[index] && alert.tab == "projects";}
                  ).map((alert, index) => {
                return (
                        <Alert onDismiss={() => {
                          this.props.alertStateHandlers[index]();
                          }}> 
                            {alert.content}
                        </Alert>
                );
              })
            }
            <Grid>
              <Row className="show-grid">
                <Col md={3} mdPush={9}>
                    <FormControl componentClass="select" placeholder="active" onChange={(e) => {this.setState({groupByKey: e.target.value});}}>
                      <option value="active">Active/Inactive</option>
                      <option value="effort">High Effort/Low Effort</option>
                      <option value="all">All</option>
                    </FormControl>
                </Col>
              </Row>
              <br/>
              <Row className="show-grid">
                  <Box 
                    title={this.getGroupByValues()[this.state.groupByKey].trueLabel}
                    content= {
                      <div>
                        <Grid>
                        {
                          this.getProjects().map((project, index) => {
                            project.index = index;  
                            return project;                        
                          }).filter(this.getGroupByValues()[this.state.groupByKey].filter).reduce(this.reduceTo2DArray, []).map(this.mapProjectRow, this)
                        }
                        </Grid>
                      </div>
                    }
                  />
                </Row>
                {(typeof this.getGroupByValues()[this.state.groupByKey].falseLabel != 'undefined' ? (
                    <Row className="show-grid">
                      <Box 
                        title={this.getGroupByValues()[this.state.groupByKey].falseLabel}
                        content= {
                          <div>
                            <Grid>
                            {
                              this.getProjects().map((project, index) => {
                                project.index = index;
                                return project;                          
                              }).filter((project) => {return !this.getGroupByValues()[this.state.groupByKey].filter(project);}).reduce(this.reduceTo2DArray, []).map(this.mapProjectRow, this)
                            }
                            </Grid>
                          </div>
                        }
                      />                
                  </Row>) : <div/>)
                }
              <br/>

            </Grid>
            {this.getProjects().map((project, index) => {
              return (
                <Modal bsSize="small" dialogClassName="project-modal" show={(this.state.projectModalIndex == index)} onHide={() => {this.setModalIndex(-1)}}>
                  <Modal.Header closeButton>
                    <Modal.Title>{project.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Thumbnail src={project.src} className="img-responsive" alt=""  onClick={() => {this.setModalIndex(index);}}>
                    <h2 className="projectSpan">{project.name}</h2>
                    <p className="projectSpan">{project.descr}</p>
                    <p className="projectSpan">Tech: <strong>{project.tech}</strong>
                    </p>
                    <p className="projectSpan">
                    Date: <strong> {project.date}</strong></p>
                    <p className="projectSpan">
                      Effort: <i className={project.effort > 0 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                      <i className={project.effort > 1 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                      <i className={project.effort > 2 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                      <i className={project.effort > 3 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                      <i className={project.effort > 4 ? "fa fa-star effortStar" : "fa fa-star-o"} />
                    </p>
                    

                    { 
                      (typeof project.link != 'undefined' ? 
                        <p className="projectSpan">Link: <a href={project.link}>{project.link}</a> </p> : <span/>)                                
                    }
                </Thumbnail>
                    
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => {this.setModalIndex(-1)}}>Close</Button>
                  </Modal.Footer>
                </Modal>
              )
            })}
            
        </div>
    );
  }
}
