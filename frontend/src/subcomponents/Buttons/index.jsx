import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export function PrimaryButton(props) {
  const { children } = props;
  return (
    <button
      className="primary-button"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export function SecondaryButton(props) {
  const { children } = props;
  return (
    <button
      className="secondary-button"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export function DropButton(props) {
  const { children } = props;
  return (
    <button
      className="drop-button"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

DropButton.propTypes = {
  children: PropTypes.node.isRequired,
};
