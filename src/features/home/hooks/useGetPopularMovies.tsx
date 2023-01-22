import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/getPopularMovies';
import { MovieI } from '@/types';

export const useGetPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<MovieI[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = true;
    setLoading(true);

    getPopularMovies()
      .then((res) => {
        if (!cancelled) return;

        const movies = res?.results;
        setTimeout(() => {
          setPopularMovies(movies);

          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = false;
    };
  }, []);

  return { popularMovies, loading } as const;
};
