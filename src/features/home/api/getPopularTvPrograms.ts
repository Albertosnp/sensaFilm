import { axiosInstance } from '@/api';
import { API_KEY } from '@/config';

export const getPopularTvPrograms = async () => {
  try {
    const response = await axiosInstance.get('/tv/popular', {
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
