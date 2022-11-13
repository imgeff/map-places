import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export function HeadingLarge(props) {
  const { children } = props;
  return (
    <h1
      className="heading-large"
      {...props}
    >
      {children}
    </h1>
  );
}

HeadingLarge.propTypes = {
  children: PropTypes.node.isRequired,
};

export function HeadingMedium(props) {
  const { children } = props;
  return (
    <h2
      className="heading-medium"
      {...props}
    >
      {children}
    </h2>
  );
}

HeadingMedium.propTypes = {
  children: PropTypes.node.isRequired,
};

export function HeadingSmall(props) {
  const { children } = props;
  return (
    <h3
      className="heading-small"
      {...props}
    >
      {children}
    </h3>
  );
}

HeadingSmall.propTypes = {
  children: PropTypes.node.isRequired,
};
