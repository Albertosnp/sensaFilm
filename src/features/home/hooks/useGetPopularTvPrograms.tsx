import { useEffect, useState } from 'react';
import { getPopularTvPrograms } from '../api/getPopularTvPrograms';
import { TvProgramI } from '@/types';

export const useGetPopularTvPrograms = () => {
  const [popularTvPrograms, setPopularTvPrograms] = useState<
    TvProgramI[] | null
  >(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = true;
    setLoading(true);

    getPopularTvPrograms()
      .then((res) => {
        if (!cancelled) return;

        const tvPrograms = res?.results;

        setPopularTvPrograms(tvPrograms);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = false;
    };
  }, []);

  return { popularTvPrograms, loading } as const;
};
