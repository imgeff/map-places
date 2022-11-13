import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Pencil, Trash } from 'phosphor-react';
import { HeadingSmall } from '../../subcomponents/Headings';
import { TextLarge, TextMedium, TextSmall } from '../../subcomponents/Texts';
import { GlobalContext } from '../../contexts/global';
import { destroyPlace } from '../../helpers/requests';
import { EditModal } from '../EditModal';
import './style.css';

export function PlaceCard({ place }) {
  const {
    map: { setPlaces },
  } = useContext(GlobalContext);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function removePlace() {
    const response = await destroyPlace(place.id);
    if (typeof response === 'string') {
      setErrorMessage(response);
      setDisplayError(true);
    } else {
      setPlaces(response);
    }
  }

  return (
    <>
      <div id="place">
        <HeadingSmall>{place.name}</HeadingSmall>
        <TextLarge>{place.status}</TextLarge>
        <span>
          <label>
            Latitude:
            <TextSmall>{place.latitude}</TextSmall>
          </label>
          <label>
            Longitude:
            <TextSmall>{place.longitude}</TextSmall>
          </label>
        </span>
        <TextMedium>
          Criado em:
          {place.createdAt}
        </TextMedium>
        <div id="place-buttons">
          <label htmlFor={`edit-modal-${place.id}`} className="daisy-tooltip" data-tip="Editar">
            <Pencil size={24} weight="duotone" color="#9AEBA3" />
          </label>
          <label className="daisy-tooltip" data-tip="Remover">
            <Trash size={24} weight="duotone" color="#9AEBA3" onClick={removePlace} />
          </label>
        </div>
        {displayError && <TextLarge style={{ color: 'red' }}>{errorMessage}</TextLarge>}
      </div>
      <EditModal place={place} />
    </>
  );
}

PlaceCard.propTypes = {
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
