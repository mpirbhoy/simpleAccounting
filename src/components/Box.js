import React, { Component } from 'react';
import {Panel, Button} from 'react-bootstrap';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open : (typeof this.props.open != 'undefined' ? this.props.open : true)
    }
  }  

  render() {
    return (
        <div>
        <Button bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
          {(typeof this.props.title != 'undefined') ? this.props.title : "header"}
        </Button>
        <Panel bsStyle="default" collapsible expanded={this.state.open } className="box" >
          {(typeof this.props.content != 'undefined') ? this.props.content : "content"}
        </Panel>
      </div>
    );
  }
}
