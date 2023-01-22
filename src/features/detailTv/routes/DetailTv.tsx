import { useParams } from 'react-router-dom';
import { useGetTv } from '../hooks/useGetTv';

export const DetailTv = () => {
  const { idTv } = useParams();
  const { tvDetail } = useGetTv({ idTv });

  return <div>DetailTv</div>;
};
