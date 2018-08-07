import React, { Component } from "react";
import propTypes from 'prop-types';
import ItemDisplay from "./ItemDisplay.js";


function LinkSpan(props) {
  const combinedList = list => {
    return list.map(l => l.href).join(", ")
  };
  return (
  	 <span>
      {props.list.map(link =>
        <span key={Math.random()}>
          <a href={link.href}> {link.href}</a>
          {Object.keys(link).map(key =>
            <span key={Math.random()}>
              {key !== 'href' &&
                <ItemDisplay title={key} item={link[key].toString()} />
              }
            </span>
          )}
        </span>
      )}
     </span>
  );
}

LinkSpan.defaultProps = {
	list:[]
}

LinkSpan.propTypes = {
	list: propTypes.array
}

export default LinkSpan;