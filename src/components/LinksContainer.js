import React, { Component } from "react";
import Prop from 'prop-types';
import LinkSpan from "./LinkSpan.js";


function LinksContainer(props) {
  return (
  	 <div className="linksContainer">
      {Object.keys(props.links).map(link =>
      	<div key={Math.random()}>
	      	<span>{link}({props.links[link].length}) : <LinkSpan list={props.links[link]}/> </span>
	      </div>
  	  )}
     </div>
  );
}

LinksContainer.defaultProps = {
	links:{}
}

LinksContainer.Prop = {
	links: Prop.object
}

export default LinksContainer;