import { GenericCard, SkeletonCard } from '@/components';
import { useCallback, useState } from 'react';
import { useGetPopularMovies } from '../../hooks/useGetPopularMovies';
import { useGetPopularTvPrograms } from '../../hooks/useGetPopularTvPrograms';
import { HomeHeader } from '../HomeHeader/HomeHeader';

import HomeLayoutStyled from './HomeLayout.styled';

export const HomeLayout = () => {
  const [toggleCategory, setToggleCategory] = useState(true);
  const { popularMovies } = useGetPopularMovies();
  const { popularTvPrograms } = useGetPopularTvPrograms();

  const handleToggleCategory = useCallback(() => {
    setToggleCategory((prev) => !prev);
  }, []);

  return (
    <HomeLayoutStyled className="HomeLayout">
      <HomeHeader
        toggleCategory={toggleCategory}
        handleToggleCategory={handleToggleCategory}
      />

      {popularMovies && (
        <section className="HomeLayout__grid">
          {toggleCategory &&
            popularMovies?.map(({ id, poster_path, title, vote_average }) => (
              <GenericCard
                key={`${id}-movie`}
                id={id}
                title={title}
                image={poster_path ?? ''}
                vote_average={vote_average}
                path="detailMovie"
              />
            ))}
          {!toggleCategory &&
            popularTvPrograms?.map(
              ({ id, poster_path, name, vote_average }) => (
                <GenericCard
                  key={`${id}-tv`}
                  id={id}
                  title={name}
                  image={poster_path ?? ''}
                  vote_average={vote_average}
                  path="detailTv"
                />
              )
            )}
        </section>
      )}
      {!popularMovies && (
        <section className="HomeLayout__grid">
          {[0, 0, 0, 0, 0, 0].map((skeleton, index) => (
            <SkeletonCard key={`${index}-skeleton`} />
          ))}
        </section>
      )}
    </HomeLayoutStyled>
  );
};
