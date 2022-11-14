import React, { useContext } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { GlobalContext } from '../../contexts/global';
import { PlaceManager } from '../../components/PlaceManager';
import { FooterMap } from '../../components/FooterMap';
import 'leaflet/dist/leaflet.css';
import './style.css';

export function Map() {
  const { map: { places } } = useContext(GlobalContext);

  return (
    <div id="map-screen">
      <MapContainer
        center={[-14.861819527124137, -40.844522620997694]}
        zoom={13}
        id="map-container"
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
      <PlaceManager />
      <FooterMap />
    </div>
  );
}
