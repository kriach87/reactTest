import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import propTypes from 'prop-types';
import TitleItem from "./TitleItem.js";
import ItemDisplay from "./ItemDisplay.js";
import LinksContainer from "./LinksContainer.js";
import FilterBar from "./FilterBar.js";



class List extends Component {
	  constructor () {
    super();
    this.state = {filterText: ""} 
  }

	sortByAscDate = data => {
		return data.sort((a,b) => new Date(a.date) - new Date(b.date));
  };

  filterData = data => {
  	if (this.state.filterText){
	  	let filteredData = [];
	    data.forEach(d => {
	      if (d.title.rendered.indexOf(this.state.filterText) !== -1) {
	        filteredData.push(d);
	      }
	    });
	    return filteredData
  	}
		return data;
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText
    });
  };

  render() {
	  return (
	  	 <div className="listContainer">
	  	 	<div> Filter by Title: </div>
	  	 	<FilterBar filterChange={this.handleFilterTextChange} />
	      {this.filterData(this.sortByAscDate(this.props.data)).map(d =>
	      	<div key={d.id}>
		      	<TitleItem item={d.title.rendered} />
		      	<ItemDisplay title="Date" item={d.date} />
		      	<ItemDisplay title="Status" item={d.status} />
		      	<ItemDisplay title="Excerpt" item={ReactHtmlParser(d.excerpt.rendered)} />
		      	<div> Links: </div>
		      	<LinksContainer links={d._links}/>
		      </div>
	  	  )}
	     </div>
	  );
	}
}

List.defaultProps = {
	data: []
}

List.propTypes = {
	data: propTypes.array,
	handleFilterTextChange: propTypes.func
}



export default List;