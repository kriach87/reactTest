import React from 'react';
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
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

FilterBar.defaultProps = {
  filterText: '',
};

FilterBar.propTypes = {
  filterText: propTypes.string,
  filterChange: propTypes.func.isRequired,
};

export default FilterBar;
