import { DetailLayout } from '@/components';
import { useParams } from 'react-router-dom';
import { useGetTv } from '../hooks/useGetTv';

export const DetailTv = () => {
  const { idTv } = useParams();
  const { tvDetail } = useGetTv({ idTv });

  return (
    <main>
      {tvDetail && <DetailLayout title={tvDetail.name} {...tvDetail} />}
    </main>
  );
};
