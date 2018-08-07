import React, { Component } from "react";
import propTypes from 'prop-types';


function TitleItem(props) {
  return (
  	<div className="titleItem"> <b>{props.item}</b> </div>
  );
}

TitleItem.defaultProps = {
	item: ""
}

TitleItem.propTypes = {
	item: propTypes.string,
}

export default TitleItem;