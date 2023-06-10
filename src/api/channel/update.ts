import axios from 'axios';
import { API_URL } from '../API_URL';


export const fetchChannelMembers = async (channelId) => {
  const url = `${API_URL}/channels?channelId=${channelId}/members`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error('Erreur lors de la récupération des membres du canal', error);
    throw error;
  }
};

export const sendMessage = async (channelId, message) => {
  const url = `${API_URL}/channels?channelId=${channelId}/messages`;

  try {
    const response = await axios.post(url, { message });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message', error);
    throw error;
  }
};

export const editChannel = async (channelId, formData) => {
  const url = `${API_URL}/channels/${channelId}`;

  try {
    const response = await axios.put(url, formData);
    return response.data; 
  } catch (error) {
    console.error('Erreur lors de l\'édition du canal', error);
    throw error;
  }
};
