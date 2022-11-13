import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PrimaryInput } from '../../subcomponents/Inputs';
import { PrimarySelect } from '../../subcomponents/Selects';
import { TextLarge } from '../../subcomponents/Texts';
import { isCoordinate } from '../../helpers/validations';
import { updatePlace } from '../../helpers/requests';
import { GlobalContext } from '../../contexts/global';
import './style.css';

export function FormEdit({ place }) {
  const {
    map: { setPlaces },
  } = useContext(GlobalContext);

  const [placeEdited, setPlaceEdited] = useState({
    id: place.id,
    name: place.name,
    latitude: place.latitude,
    longitude: place.longitude,
    status: place.status,
  });
  const [activeButton, setActiveButton] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function submitMustBeDisabled() {
    const { name, latitude, longitude } = placeEdited;
    if (name.length >= 3 && isCoordinate(latitude) && isCoordinate(longitude)) return false;
    return true;
  }

  function handleButtonActivation() {
    setActiveButton(submitMustBeDisabled());
  }

  function handlePlaceData({ target: { name, value } }) {
    setPlaceEdited({ ...placeEdited, [name]: value });
  }

  async function submitPlaceEdited() {
    const response = await updatePlace(placeEdited);
    if (typeof response === 'string') {
      setErrorMessage(response);
      setDisplayError(true);
    } else {
      setPlaces(response);
    }
  }

  useEffect(() => {
    handleButtonActivation();
  }, [placeEdited]);

  return (
    <>
      <form id="form-place">
        <label htmlFor="local-name">
          Nome
          <PrimaryInput
            id="local-name"
            name="name"
            value={placeEdited.name}
            placeholder="nome do local"
            onChange={handlePlaceData}
          />
        </label>
        <div id="coordinates">
          <label htmlFor="local-latitude">
            Latitude
            <PrimaryInput
              id="local-latitude"
              name="latitude"
              value={placeEdited.latitude}
              placeholder="latitude do local"
              maxLength={9}
              onChange={handlePlaceData}
            />
          </label>
          <label htmlFor="local-longitude">
            Longitude
            <PrimaryInput
              id="local-longitude"
              name="longitude"
              value={placeEdited.longitude}
              placeholder="longitude do local"
              maxLength={9}
              onChange={handlePlaceData}
            />
          </label>
        </div>
        <label htmlFor="local-status">
          Status
          <PrimarySelect
            name="status"
            value={placeEdited.status}
            list={['Aberto', 'Fechado']}
            onChange={handlePlaceData}
          />
        </label>
        <button
          type="button"
          disabled={activeButton}
          onClick={submitPlaceEdited}
        >
          <label
            htmlFor={`edit-modal-${place.id}`}
          >
            Confirmar edição
          </label>
        </button>
      </form>
      {displayError && <TextLarge style={{ color: 'red' }}>{errorMessage}</TextLarge>}
    </>
  );
}

FormEdit.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    name: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
