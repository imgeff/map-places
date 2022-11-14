import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export function PrimarySelect(props) {
  const { list } = props;
  return (
    <select
      className="primary-select daisy-select"
      {...props}
    >
      {list.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  );
}

PrimarySelect.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
