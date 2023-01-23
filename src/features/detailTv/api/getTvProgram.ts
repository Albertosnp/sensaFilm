import { axiosInstance } from '@/api';
import { API_KEY } from '@/config';

export const getTvProgram = async (tvId = '') => {
  try {
    const response = await axiosInstance.get(`/tv/${tvId}`, {
      params: {
        api_key: API_KEY,
        language: 'es-ES',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }

  return null;
};
