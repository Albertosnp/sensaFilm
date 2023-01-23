import { useParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { DetailLayout, GenericCard } from '@/components';
import { useGetSimilarTv } from '../hooks/useGetSimilarTv';
import { useGetTv } from '../hooks/useGetTv';

export const DetailTv = () => {
  const { idTv } = useParams();
  const { tvDetail } = useGetTv({ idTv });
  const { tvPrograms } = useGetSimilarTv({ idTv });

  return (
    <main>
      {tvDetail && (
        <DetailLayout title={tvDetail.name} {...tvDetail}>
          {tvPrograms &&
            tvPrograms?.map(({ id, poster_path, name, vote_average }) => (
              <SwiperSlide key={`${id}-tv`}>
                <GenericCard
                  id={id}
                  title={name}
                  image={poster_path ?? ''}
                  vote_average={vote_average}
                  path="detailTv"
                />
              </SwiperSlide>
            ))}
        </DetailLayout>
      )}
    </main>
  );
};
