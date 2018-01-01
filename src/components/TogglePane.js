import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class TogglePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  

  render() {
    return (
        <div>
            <Grid>
                <Row>
                    <Col md={8} >
                    </Col>
                    <Col xs={12} md={1}>
                        <input checked type="checkbox" data-toggle="toggle" data-on="Projects" data-off="Projects" data-onstyle="warning" data-style="ios" data-offstyle="default" />
                    </Col>
                    <Col xs={12} md={1}>
                        <input checked type="checkbox" data-toggle="toggle" data-on="Thoughts" data-off="Thoughts" data-onstyle="success" data-style="ios" data-offstyle="default" />
                    </Col>
                    <Col xs={12} md={1}>
                        <input type="checkbox" data-toggle="toggle" data-on="Articles" data-off="Articles" data-onstyle="primary" data-style="ios" data-offstyle="default" />
                    </Col>
                    <Col xs={12} md={1}>
                        <input type="checkbox" data-toggle="toggle" data-on="ChatBot" data-off="ChatBot" data-onstyle="default" data-style="ios" data-offstyle="default" />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}
