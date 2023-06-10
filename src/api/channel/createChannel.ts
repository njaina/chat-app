import axios from 'axios';
import { API_URL } from '../API_URL';

export const createChannel = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/channel`, formData);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création du canal');
  }
};
