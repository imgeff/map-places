import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setItemLocalStorage } from '../../helpers/localstorage';
import { PrimaryButton } from '../../subcomponents/Buttons';
import { PrimaryInput } from '../../subcomponents/Inputs';
import { register } from '../../helpers/requests';
import { TextLarge } from '../../subcomponents/Texts';
import './style.css';

export function FormRegister() {
  const [registerUser, setRegisterUser] = useState({ name: '', username: '', password: '' });
  const [activeButton, setActiveButton] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleRegisterData({ target: { name, value } }) {
    setRegisterUser({ ...registerUser, [name]: value });
  }

  function submitMustBeActive() {
    const { name, username, password } = registerUser;
    if (name.length >= 3 && username.length >= 3 && password.length >= 6) return true;
    return false;
  }

  function handleButtonActivation() {
    setActiveButton(submitMustBeActive());
  }

  async function submitRegister() {
    const response = await register(registerUser);
    if (typeof response === 'string') {
      setErrorMessage(response);
      setDisplayError(true);
    } else {
      setItemLocalStorage('user', response);
      navigate('/home');
    }
  }

  useEffect(() => {
    handleButtonActivation();
  }, [registerUser]);

  return (
    <div className="form-register">
      <form>
        <label htmlFor="name-input">
          Digite seu nome
          <PrimaryInput
            id="name-input"
            placeholder="Name"
            type="text"
            name="name"
            value={registerUser.name}
            onChange={handleRegisterData}
          />
        </label>
        <label htmlFor="username-input">
          Digite seu nome de usuário
          <PrimaryInput
            id="username-input"
            placeholder="Username"
            type="text"
            name="username"
            value={registerUser.username}
            onChange={handleRegisterData}
          />
        </label>
        <label htmlFor="password-input">
          Digite sua senha
          <PrimaryInput
            id="password-input"
            placeholder="* * * * * *"
            type="password"
            name="password"
            value={registerUser.password}
            onChange={handleRegisterData}
          />
        </label>
        <div className="form-submit-container">
          <PrimaryButton disabled={!activeButton} onClick={submitRegister}>
            Criar
          </PrimaryButton>
          {displayError && <TextLarge style={{ color: 'red' }}>{errorMessage}</TextLarge>}
        </div>
      </form>
    </div>
  );
}
