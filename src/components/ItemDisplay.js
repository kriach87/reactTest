import React from 'react';
import propTypes from 'prop-types';


function ItemDisplay(props) {
  return (
    <div>
      {' '}
      <li>
        {props.title}
:
        {' '}
        {props.item}
      </li>
      {' '}
    </div>
  );
}

ItemDisplay.defaultProps = {
  item: '',
};

ItemDisplay.propTypes = {
  title: propTypes.string.isRequired,
  item: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
  ]),
};

export default ItemDisplay;
