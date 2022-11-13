import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../subcomponents/Buttons';
import { PrimaryInput } from '../../subcomponents/Inputs';
import { TextLarge } from '../../subcomponents/Texts';
import { login } from '../../helpers/requests';
import { setItemLocalStorage } from '../../helpers/localstorage';
import './style.css';

export function FormLogin() {
  const [loginUser, setLoginUser] = useState({ username: '', password: '' });
  const [activeButton, setActiveButton] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleLoginData({ target: { name, value } }) {
    setLoginUser({ ...loginUser, [name]: value });
  }

  function submitMustBeActive() {
    const { username, password } = loginUser;
    if (username.length >= 3 && password.length >= 6) return true;
    return false;
  }

  function handleButtonActivation() {
    setActiveButton(submitMustBeActive());
  }

  async function submitLogin() {
    const response = await login(loginUser);
    if (typeof response === 'string') {
      setErrorMessage(response);
      setDisplayError(true);
    } else {
      setItemLocalStorage('user', response);
      navigate('/map');
    }
  }

  useEffect(() => {
    handleButtonActivation();
  }, [loginUser]);

  return (
    <div className="form-login">
      <form>
        <label htmlFor="username-input">
          Digite seu nome de usuário
          <PrimaryInput
            id="username-input"
            placeholder="Username"
            type="text"
            name="username"
            value={loginUser.username}
            onChange={handleLoginData}
          />
        </label>
        <label htmlFor="password-input">
          Digite sua senha
          <PrimaryInput
            id="password-input"
            placeholder="* * * * * *"
            type="password"
            name="password"
            value={loginUser.password}
            onChange={handleLoginData}
          />
        </label>
        <div className="form-submit-container">
          <PrimaryButton disabled={!activeButton} onClick={submitLogin}>
            Entrar na plataforma
          </PrimaryButton>
          {displayError && <TextLarge style={{ color: 'red' }}>{errorMessage}</TextLarge>}
        </div>
      </form>
    </div>
  );
}
