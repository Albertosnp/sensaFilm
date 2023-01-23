import { useParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Carousel, DetailLayout, GenericCard } from '@/components';
import { useGetMovie } from '@/features/detailMovie/hooks/useGetMovie';
import { useGetSimilarMovies } from '../hooks/useGetSimilarMovies';

export const DetailMovie = () => {
  const { idMovie } = useParams();
  const { movie } = useGetMovie({ idMovie });
  const { movies } = useGetSimilarMovies({ idMovie });

  return (
    <main>
      {movie && (
        <DetailLayout {...movie}>
          {movies && movies.length > 0 && (
            <Carousel>
              {movies?.map(({ id, poster_path, title, vote_average }) => (
                <SwiperSlide key={`${id}-movie`}>
                  <GenericCard
                    key={`${id}-movie`}
                    id={id}
                    title={title}
                    image={poster_path ?? ''}
                    vote_average={vote_average}
                    path="/detailMovie"
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
