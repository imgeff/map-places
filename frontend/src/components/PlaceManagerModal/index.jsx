import React from 'react';
import { PlaceManager } from '../PlaceManager';
import './style.css';

export function PlaceManagerModal() {
  return (
    <div>
      <input
        type="checkbox"
        id="place-manager-modal"
        className="daisy-modal-toggle"
      />
      <label
        htmlFor="place-manager-modal"
        className="daisy-modal cursor-pointer"
      >
        <label className="daisy-modal-box relative" htmlFor="">
          <PlaceManager style={{ display: 'flex', width: '100%', minHeight: '100%' }} />
        </label>
      </label>
    </div>
  );
}
