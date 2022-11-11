import axios from 'axios';

export async function register(data) {
  try {
    const response = await axios.post('http://localhost:3001/user/register', data);
    return response;
  } catch (error) {
    return error.message;
  }
}

export async function login(data) {
  try {
    const response = await axios.post('http://localhost:3001/user/login', data);
    return response;
  } catch (error) {
    return error.message;
  }
}
