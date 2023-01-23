import { useParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Carousel, DetailLayout, GenericCard } from '@/components';
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
          {tvPrograms && tvPrograms.length > 0 && (
            <Carousel>
              {tvPrograms?.map(({ id, poster_path, name, vote_average }) => (
                <SwiperSlide key={`${id}-tv`}>
                  <GenericCard
                    id={id}
                    title={name}
                    image={poster_path ?? ''}
                    vote_average={vote_average}
                    path={`/detailTv`}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          )}
        </DetailLayout>
      )}
    </main>
  );
};
