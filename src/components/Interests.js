import React, { Component } from 'react';
import Box from './Box';
import {Row, Col, Grid, Panel,Media, Image, Accordion, Navbar, Nav, Label, NavItem, PanelGroup, Table} from 'react-bootstrap';

export default class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      interests: [{title: "Java", img: "/img/interests/java.png", content: ["One of the areas that I am very interested in is working on back-end of large-scale systems. Naturally Java is one of the first things that comes to mind!", "Java 8 and 9 have nice improvement such as the introduction of lamda expressions, Stream API, jShell (REPL tool) and the language seems to be headed in the right direction"],
                  tech:true, exploring: false},
                  {title: "Web (JS, Node, React)", img: "/img/interests/javascript.png", content: ["One of the few things that I have found very enjoyable is working on indie-projects on the web. The feeling of developing something from start to finish with creative freedom is amazing.", "Have build quite a few NodeJS apps and just getting started with front-end development (React)"],
                  tech:true, exploring:false},
                  {title: "Chatbot", img: "/img/interests/chatbots.png", content: ["Exploring this area. Lots of fun and challenging problems (especially with handling diverse conversations).", "Have built couple of chatbots and plan to continue building more."],
                  tech:true, exploring:true},
                  {title: "Voice Assistants",img: "/img/interests/voice-assistants.png", content: ["Google Home and Amazon Echo have opened up a new area of interfacing with users.", "Working on Four Quads app which will have integration with Google Home."],
                  tech:true, exploring: true},
                  {title: "Web Assembly (WASM)",img: "/img/interests/webAssembly.png", content: ["As volatile as the web already is, now that web assembly is supported by Chrome and Firefox, I expect it to accelerate (at the very least initially). Interesting times ahead"],
                  tech:true, exploring: true},
                  {title: "Machine Learning",img: "/img/interests/machineLearning.gif", content: ["Changing the world in front of our eyes. Looking for a problem to solve in this area."],
                  tech:true, exploring: true},
                  {title: "Piano", img: "/img/interests/piano.png",content: ["Started taking piano classes couple of months ago. Enjoying it so far.", "Using a low-quality keyboard to practice at home right now. Want to buy a better one soon."],
                  tech:false},
                  {title: "Foosball / Pool",img: "/img/interests/foos.png", content: [" Started playing both pretty regularly since half a year ago."],
                  tech:false},
                  {title: "Table tennis",img: "/img/interests/ttennis.png", content: ["Played quite a bit at uni. A little out of practice now"],
                  tech:false},
                  {title: "Skiing", img: "/img/interests/ski.png",content: [" Went for the first time couple of weeks ago and loved it. Definitely have to try again soon"],
                  tech:false},
                  {title: "Philosophy/Psych",img: "/img/interests/phil.png", content: ["Dabble into these areas from time to time. Highly opinionated areas but I have enjoyed Nietsche and Carl Jung."],
                  tech:false},
                
                
                ]
    }
  }  

  reduceTo2DArray(accumulator, currentValue, currentIndex) {
    if (currentIndex % 2 == 0) {
      accumulator.push([currentValue]);
    } else {
      accumulator[Math.floor(currentIndex / 2)].push(currentValue);
    }
    return accumulator;
  };

  mapInterestRow(interestRow) {
    return (
      <Row>
        {
          interestRow.map(function(interest) {
            return (
              <Col xs={12} md={6}><Box 
              title={interest.title}

              content={
                  <div>
                    {(interest.tech && interest.exploring) ? <Label>Exploring</Label> : <span/>} 
                    <Media>
                      <Media.Left>
                        {(interest.img != undefined ? <img width={64} height={64 }responsive src={interest.img} /> : <span/>)}
                      </Media.Left>
                      <Media.Body>
                        {/* <Media.Heading>Media Heading</Media.Heading> */}
                        {interest.content.map((para) => {
                          return <p>{para}</p>;
                        })}
                      </Media.Body>
                    </Media>
                     
                     
                  </div>
              }
          
          /></Col>
            )
          })      
        }
        </Row>

    )
  }
  
  render() {
    return (
        <div>
            <Grid>
              <Row classname="show-grid">
                <Col mdPush={0} md={3}>
                  <Nav stacked={true} bsStyle="tabs" pullRight={true} justified={true} activeKey={this.state.activeTab}>
                    <NavItem eventKey={1} href="#" onClick={() => {this.setState({activeTab: 1});}}>Tech</NavItem>
                    <NavItem eventKey={2} href="#" onClick={() => {this.setState({activeTab: 2});}}>Non-Tech</NavItem>
                  </Nav>
                </Col>
              </Row>
              <br/>
              <br/>
              {this.state.interests.filter((interest) => {return interest.tech == (this.state.activeTab == 1);}).reduce
                (this.reduceTo2DArray, []).map(this.mapInterestRow, this)}
              
              

            </Grid>
            
        </div>
    );
  }
}
