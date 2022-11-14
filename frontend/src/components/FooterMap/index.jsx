import React from 'react';
import { MapTrifold } from 'phosphor-react';
import { DropButton } from '../../subcomponents/Buttons';
import { PlaceManagerModal } from '../PlaceManagerModal';
import { TextMedium } from '../../subcomponents/Texts';
import './style.css';

export function FooterMap() {
  return (
    <>
      <footer id="footer-map">
        <label htmlFor="place-manager-modal">
          <DropButton>
            <MapTrifold size={28} weight="duotone" color="#9AEBA3" />
          </DropButton>
          <TextMedium style={{ color: '#CECECE' }}>Gerenciar Mapa</TextMedium>
        </label>
      </footer>
      <PlaceManagerModal />
    </>
  );
}
