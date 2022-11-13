import axios from 'axios';
import { getItemLocalStorage } from '../localstorage';

export async function register(data) {
  try {
    const response = await axios.post('http://localhost:3001/user/register', data);
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function login(data) {
  try {
    const response = await axios.post('http://localhost:3001/user/login', data);
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function createPlace(data) {
  try {
    const userToken = getItemLocalStorage('user').token;
    const response = await axios.post('http://localhost:3001/place/create', data, {
      headers: {
        Authorization: userToken,
      },
    });
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function getPlaces() {
  try {
    const userToken = getItemLocalStorage('user').token;
    const response = await axios.get('http://localhost:3001/place/all', {
      headers: {
        Authorization: userToken,
      },
    });
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function updatePlace(data) {
  try {
    const userToken = getItemLocalStorage('user').token;
    const response = await axios.put('http://localhost:3001/place/update', data, {
      headers: {
        Authorization: userToken,
      },
    });
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function destroyPlace(id) {
  try {
    const userToken = getItemLocalStorage('user').token;
    const response = await axios.delete(`http://localhost:3001/place/destroy/${id}`, {
      headers: {
        Authorization: userToken,
      },
    });
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}
