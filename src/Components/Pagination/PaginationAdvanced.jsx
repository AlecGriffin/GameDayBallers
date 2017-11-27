import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';

export default class PaginationAdvanced extends Component {

  render() {
    return (
      <Pagination
        prev
        next
        ellipsis
        boundaryLinks
        items={this.props.num_items}
        maxButtons={this.props.max_items}
        activePage={this.props.activePage}
        onSelect={this.props.onSelect}
      />
    );
  }
}
