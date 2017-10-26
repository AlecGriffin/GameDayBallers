import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';

export default class PaginationAdvanced extends Component {

  constructor(props){
    super(props);

    this.state = {
      activePage: 1,
    }
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={this.props.num_items}
        maxButtons={this.props.max_items}
        activePage={this.state.activePage}
        onSelect={this.handleSelect}
      />
    );
  }
}