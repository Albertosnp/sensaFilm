import { useEffect, useState } from 'react';
import { TvProgramI } from '@/types';
import { getSimilarTv } from '../api/getSimilarTv';

interface UseGetMovieProps {
  idTv: string | undefined;
}

export const useGetSimilarTv = ({ idTv }: UseGetMovieProps) => {
  const [tvPrograms, setTvPrograms] = useState<TvProgramI[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idTv) return;

    let cancelled = true;
    setLoading(true);

    getSimilarTv(idTv)
      .then((res) => {
        if (!cancelled) return;

        const programs = res?.results;

        setTvPrograms(programs);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = false;
    };
  }, [idTv]);

  return { tvPrograms, loading } as const;
};
