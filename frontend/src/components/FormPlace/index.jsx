import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../contexts/global';
import { createPlace } from '../../helpers/requests';
import { isCoordinate } from '../../helpers/validations';
import { PrimaryInput } from '../../subcomponents/Inputs';
import { PrimaryButton } from '../../subcomponents/Buttons';
import { PrimarySelect } from '../../subcomponents/Selects';
import { TextLarge } from '../../subcomponents/Texts';
import './style.css';

const placeReseted = {
  name: '',
  latitude: '',
  longitude: '',
  status: 'Aberto',
};

export function FormPlace() {
  const {
    map: { setPlaces },
  } = useContext(GlobalContext);
  const [place, setPlace] = useState(placeReseted);
  const [activeButton, setActiveButton] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handlePlaceData({ target: { name, value } }) {
    setPlace({ ...place, [name]: value });
  }

  function resetPlace() {
    setPlace(placeReseted);
  }

  function submitMustBeDisabled() {
    const { name, latitude, longitude } = place;
    if (name.length >= 3 && isCoordinate(latitude) && isCoordinate(longitude)) return false;
    return true;
  }

  function handleButtonActivation() {
    setActiveButton(submitMustBeDisabled());
  }

  async function submitPlace() {
    const response = await createPlace(place);
    if (typeof response === 'string') {
      setErrorMessage(response);
      setDisplayError(true);
    } else {
      setPlaces(response);
      resetPlace();
    }
  }

  useEffect(() => {
    handleButtonActivation();
  }, [place]);

  return (
    <form id="form-place">
      <label htmlFor="local-name">
        Nome
        <PrimaryInput
          id="local-name"
          name="name"
          value={place.name}
          placeholder="Ex: Loja Código Fonte"
          onChange={handlePlaceData}
        />
      </label>
      <div id="coordinates">
        <label htmlFor="local-latitude">
          Latitude
          <PrimaryInput
            id="local-latitude"
            name="latitude"
            value={place.latitude}
            placeholder="Ex: -76.54321"
            maxLength={9}
            onChange={handlePlaceData}
          />
        </label>
        <label htmlFor="local-longitude">
          Longitude
          <PrimaryInput
            id="local-longitude"
            name="longitude"
            value={place.longitude}
            placeholder="Ex: -12.34567"
            maxLength={9}
            onChange={handlePlaceData}
          />
        </label>
      </div>
      <label htmlFor="local-status">
        Status
        <PrimarySelect
          name="status"
          value={place.status}
          list={['Aberto', 'Fechado']}
          onChange={handlePlaceData}
        />
      </label>
      <PrimaryButton
        disabled={activeButton}
        onClick={submitPlace}
        style={{ background: '#9AEBA3' }}
      >
        Criar Local
      </PrimaryButton>
      {displayError && <TextLarge style={{ color: 'red' }}>{errorMessage}</TextLarge>}
    </form>
  );
}
