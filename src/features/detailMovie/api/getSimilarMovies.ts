import { axiosInstance } from '@/api';
import { API_KEY } from '@/config';

export const getSimilarMovies = async (idMovie = '') => {
  try {
    const response = await axiosInstance.get(`/movie/${idMovie}/similar`, {
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
