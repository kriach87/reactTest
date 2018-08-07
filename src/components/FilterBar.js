import React, { Component } from "react";
import propTypes from 'prop-types';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.filterChange(e.target.value);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange} />
      </form>
    );
  }
}

export default FilterBar;
