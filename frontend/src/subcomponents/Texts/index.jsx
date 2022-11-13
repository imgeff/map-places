import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export function TextLarge(props) {
  const { children } = props;
  return (
    <p
      className="text-large"
      {...props}
    >
      {children}
    </p>
  );
}

TextLarge.propTypes = {
  children: PropTypes.node.isRequired,
};

export function TextMedium(props) {
  const { children } = props;
  return (
    <p
      className="text-medium"
      {...props}
    >
      {children}
    </p>
  );
}

TextMedium.propTypes = {
  children: PropTypes.node.isRequired,
};

export function TextSmall(props) {
  const { children } = props;
  return (
    <p
      className="text-small"
      {...props}
    >
      {children}
    </p>
  );
}

TextSmall.propTypes = {
  children: PropTypes.node.isRequired,
};
