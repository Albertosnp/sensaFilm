import { TvDetailI } from '@/types';
import { useEffect, useState } from 'react';
import { getTvProgram } from '../api/getTvProgram';

interface UseGetMovieProps {
  idTv: string | undefined;
}

export const useGetTv = ({ idTv }: UseGetMovieProps) => {
  const [tvDetail, setTvDetail] = useState<TvDetailI[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idTv) return;

    let cancelled = true;
    setLoading(true);

    getTvProgram(idTv)
      .then((res) => {
        if (!cancelled) return;

        setTvDetail(tvDetail);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = false;
    };
  }, [idTv]);

  return { tvDetail, loading } as const;
};
