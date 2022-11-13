import React, { useState, useEffect, useContext } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { GlobeHemisphereWest } from 'phosphor-react';
import { GlobalContext } from '../../contexts/global';
import { HeadingLarge } from '../../subcomponents/Headings';
import { TextLarge } from '../../subcomponents/Texts';
import { FormPlace } from '../../components/FormPlace';
import { PlaceCard } from '../../components/PlaceCard';
import { getPlaces } from '../../helpers/requests';
import 'leaflet/dist/leaflet.css';
import './style.css';

export function Map() {
  const [isFormPlace, setIsFormPlace] = useState(true);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { map: { places, setPlaces } } = useContext(GlobalContext);

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
    <div className="map">
      <MapContainer
        center={[-14.861819527124137, -40.844522620997694]}
        zoom={13}
        style={{ width: '75%', height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map(({ name, latitude, longitude }) => (
          <Marker key={name} position={[latitude, longitude]}>
            <Popup>
              {name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div id="place-manager-container">
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
    </div>
  );
}
