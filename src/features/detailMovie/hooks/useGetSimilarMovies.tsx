import { useEffect, useState } from 'react';
import { MovieI } from '@/types';
import { getSimilarMovies } from '../api/getSimilarMovies';

interface UseGetMovieProps {
  idMovie: string | undefined;
}

export const useGetSimilarMovies = ({ idMovie }: UseGetMovieProps) => {
  const [movies, setMovies] = useState<MovieI[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idMovie) return;

    let cancelled = true;
    setLoading(true);

    getSimilarMovies(idMovie)
      .then((res) => {
        if (!cancelled) return;

        const similarMovies = res?.results;
        setMovies(similarMovies);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = false;
    };
  }, [idMovie]);

  return { movies, loading } as const;
};
