import axios from 'axios';
import { API_URL } from '../API_URL';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'utilisateur');
  }
};
