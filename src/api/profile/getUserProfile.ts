import axios from 'axios';
import { API_URL } from '../API_URL';

interface User {
  name: string;
  email: string;
  bio: string;
}

export const fetchUserData = async (): Promise<User> => {
  try {
    const response = await axios.get<User>(`${API_URL}/user`); 
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des informations de l'utilisateur");
  }
};
