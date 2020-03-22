import axios from 'axios';

const API_URL = 'https://api.citybik.es/v2';

export const networks = axios.create({
  baseURL: `${API_URL}/networks`
});
