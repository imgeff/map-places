import React, { useState } from 'react';
import { GlobeHemisphereWest } from 'phosphor-react';
import { FormLogin } from '../../components/FormLogin';
import { FormRegister } from '../../components/FormRegister';
import { SecondaryButton } from '../../subcomponents/Buttons';
import { HeadingLarge } from '../../subcomponents/Headings';
import { TextLarge } from '../../subcomponents/Texts';
import './style.css';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login">
      <header>
        <GlobeHemisphereWest size={80} weight="duotone" color="#9AEBA3" />
        <HeadingLarge>Map Places</HeadingLarge>
        <TextLarge>Faça login ou cadastre-se</TextLarge>
      </header>
      {isLogin ? <FormLogin /> : <FormRegister />}
      <footer>
        <SecondaryButton onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Não tem conta? Crie agora' : 'Voltar ao login'}
        </SecondaryButton>
      </footer>
    </div>
  );
}
