import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import propTypes from 'prop-types';
import TitleItem from './TitleItem';
import ItemDisplay from './ItemDisplay';
import LinksContainer from './LinksContainer';
import FilterBar from './FilterBar';


class List extends Component {
  constructor() {
    super();
    this.state = { filterText: '' };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  sortByAscDate(data) {
    return data.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  filterData(data) {
    if (this.state.filterText) {
      const filteredData = [];
      data.forEach((d) => {
        if (d.title.rendered.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1) {
          filteredData.push(d);
        }
      });
      return filteredData;
    }
    return data;
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText,
    });
  }

  render() {
    return (
      <div className="listContainer">
        <div>
          Filter by Title:
        </div>
        <FilterBar filterText={this.state.filterText} filterChange={this.handleFilterTextChange} />
        {this.filterData(this.sortByAscDate(this.props.data)).map(d => (
          <div key={d.id}>
            <TitleItem item={d.title.rendered} />
            <ItemDisplay title="Date" item={new Date(d.date).toDateString()} />
            <ItemDisplay title="Status" item={d.status} />
            <ItemDisplay title="Excerpt" item={ReactHtmlParser(d.excerpt.rendered)} />
            <div>
              Links:
            </div>
            <LinksContainer links={d._links} />
          </div>
        ))}
      </div>
    );
  }
}

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: propTypes.array,
};


export default List;
