import React from 'react';
import PropTypes from 'prop-types';
import { FormEdit } from '../FormEdit';
import './style.css';

export function EditModal({ place }) {
  return (
    <div className="edit-modal-place">
      <input
        type="checkbox"
        id={`edit-modal-${place.id}`}
        className="daisy-modal-toggle"
      />
      <label
        htmlFor={`edit-modal-${place.id}`}
        className="daisy-modal cursor-pointer"
      >
        <label className="daisy-modal-box relative" htmlFor="">
          <FormEdit place={place} />
        </label>
      </label>
    </div>
  );
}

EditModal.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    name: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
