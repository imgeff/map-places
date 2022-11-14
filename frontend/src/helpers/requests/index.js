import axios from 'axios';
import { getItemLocalStorage } from '../localstorage';

export async function register(data) {
  try {
    const response = await axios.post('https://map-places-backend-production.up.railway.app/user/register', data);
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function login(data) {
  try {
    const response = await axios.post('https://map-places-backend-production.up.railway.app/user/login', data);
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function getPlaces() {
  try {
    const userToken = getItemLocalStorage('user').token;
    const response = await axios.get('https://map-places-backend-production.up.railway.app/place/all', {
      headers: {
        Authorization: userToken,
      },
    });
    return response.data;
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function createPlace(data) {
  try {
    const userToken = getItemLocalStorage('user').token;
    await axios.post('https://map-places-backend-production.up.railway.app/place/create', data, {
      headers: {
        Authorization: userToken,
      },
    });
    return getPlaces();
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function updatePlace(data) {
  try {
    const userToken = getItemLocalStorage('user').token;
    await axios.put('https://map-places-backend-production.up.railway.app/place/update', data, {
      headers: {
        Authorization: userToken,
      },
    });
    return getPlaces();
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}

export async function destroyPlace(id) {
  try {
    const userToken = getItemLocalStorage('user').token;
    await axios.delete(`https://map-places-backend-production.up.railway.app/place/destroy/${id}`, {
      headers: {
        Authorization: userToken,
      },
    });
    return getPlaces();
  } catch (error) {
    return error.response?.data.message || error.message;
  }
}
