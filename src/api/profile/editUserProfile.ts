import axios from 'axios';
import { API_URL } from '../API_URL';


interface UserProfile {
  name: string;
  email: string;
  bio: string;
}

interface UpdateProfileData {
  name?: string;
  email?: string;
  bio?: string;
}

interface UpdatePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const fetchUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await axios.get<UserProfile>(`${API_URL}/user`);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération du profil utilisateur');
  }
};


export const updateProfile = async (data: UpdateProfileData): Promise<void> => {
  try {
    await axios.put(`${API_URL}/user`, data);
    console.log('Profil mis à jour avec succès');
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour du profil utilisateur');
  }
};

export const updatePassword = async (data: UpdatePasswordData): Promise<void> => {
  try {
    await axios.put(`${API_URL}/user`, data);
    console.log('Mot de passe mis à jour avec succès');
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour du mot de passe');
  }
};
