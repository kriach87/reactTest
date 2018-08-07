import React from 'react';
import propTypes from 'prop-types';
import LinkSpan from './LinkSpan';


function LinksContainer(props) {
  return (
    <div className="linksContainer">
      {Object.keys(props.links).map(link => (
        <div key={Math.random()}>
          <span>
            {link}
(
            {props.links[link].length}
) :
            {' '}
            <LinkSpan list={props.links[link]} />
            {' '}
          </span>
        </div>
      ))}
    </div>
  );
}

LinksContainer.defaultProps = {
  links: {},
};

LinksContainer.propTypes = {
  links: propTypes.object,
};

export default LinksContainer;
