import { useEffect, useState } from 'react';
import { MovieDetailI } from '@/types';
import { getMovie } from '@/features/detailMovie/api/getMovie';

interface UseGetMovieProps {
  idMovie: string | undefined;
}

export const useGetMovie = ({ idMovie }: UseGetMovieProps) => {
  const [movie, setMovie] = useState<MovieDetailI[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idMovie) return;

    let cancelled = true;
    setLoading(true);

    getMovie(idMovie)
      .then((res) => {
        if (!cancelled) return;

        setMovie(movie);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = false;
    };
  }, [idMovie]);

  return { movie, loading } as const;
};
