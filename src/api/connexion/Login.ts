import axios from 'axios';
import { API_URL } from '../API_URL';

export const loginUser = async (userCredentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userCredentials);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la connexion de l'utilisateur");
  }
};
