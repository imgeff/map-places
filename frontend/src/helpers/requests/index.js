import axios from 'axios';

export async function register(data) {
  try {
    const response = await axios.post('http://localhost:3001/user/register', data);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
}

export async function login(data) {
  try {
    const response = await axios.post('http://localhost:3001/user/login', data);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
}
