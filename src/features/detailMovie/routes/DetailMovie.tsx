import { useGetMovie } from '@/features/detailMovie/hooks/useGetMovie';
import { useParams } from 'react-router-dom';

export const DetailMovie = () => {
  const { idMovie } = useParams();
  const { movie } = useGetMovie({ idMovie });

  return <div>DetailMovie</div>;
};
