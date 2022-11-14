import React, { useContext, useEffect, useState } from 'react';
import { GlobeHemisphereWest } from 'phosphor-react';
import { GlobalContext } from '../../contexts/global';
import { HeadingLarge } from '../../subcomponents/Headings';
import { TextLarge } from '../../subcomponents/Texts';
import { FormPlace } from '../FormPlace';
import { PlaceCard } from '../PlaceCard';
import { getPlaces } from '../../helpers/requests';
import './style.css';

export function PlaceManager(props) {
  const { map: { places, setPlaces } } = useContext(GlobalContext);
  const [isFormPlace, setIsFormPlace] = useState(true);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function requestPlaces() {
    const response = await getPlaces();
    if (typeof response === 'string') {
      setErrorMessage(response);
      setDisplayError(true);
    } else {
      setPlaces(response);
    }
  }

  useEffect(() => {
    requestPlaces();
  }, []);

  return (
    <div id="place-manager-container" {...props}>
      <header>
        <GlobeHemisphereWest size={80} weight="duotone" color="#9AEBA3" />
        <HeadingLarge>Map Places</HeadingLarge>
        <TextLarge>Crie e Gerencie suas localidades</TextLarge>
      </header>
      { isFormPlace ? <FormPlace /> : (
        <ul id="places">
          {places.length === 0 ? (
            <TextLarge>
              Você ainda não adicionou locais
            </TextLarge>
          ) : places.map((place) => (
            <li key={place.name}>
              <PlaceCard place={place} />
            </li>
          ))}
        </ul>
      ) }
      <footer>
        {displayError && <TextLarge style={{ color: 'red' }}>{errorMessage}</TextLarge>}
        <div>
          <button type="button" onClick={() => setIsFormPlace(true)}>Formulário de Adição</button>
          <button type="button" onClick={() => setIsFormPlace(false)}>Gerenciar Locais</button>
        </div>
      </footer>
    </div>
  );
}
