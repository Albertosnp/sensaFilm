import { GenericCard, InputSwitch, SkeletonCard } from '@/components';
import { useCallback, useState } from 'react';
import { useGetPopularMovies } from '../../hooks/useGetPopularMovies';
import { useGetPopularTvPrograms } from '../../hooks/useGetPopularTvPrograms';

import imgTv from '@/assets/img/television.png';
import imgVideo from '@/assets/img/video.png';

import HomeLayoutStyled from './HomeLayout.styled';

const TITLES = {
  movies: 'Películas destacadas',
  tv: 'Tv',
};

export const HomeLayout = () => {
  const { popularMovies } = useGetPopularMovies();
  const { popularTvPrograms } = useGetPopularTvPrograms();
  const [toggleCategory, setToggleCategory] = useState(true);

  const handleToggleCategory = useCallback(() => {
    setToggleCategory((prev) => !prev);
  }, []);

  return (
    <HomeLayoutStyled className="HomeLayout">
      <div className="HomeLayout__header">
        <h3 className="HomeLayout__header__title">
          {toggleCategory ? TITLES.movies : TITLES.tv}
        </h3>
        <div className="HomeLayout__header__buttons">
          <img src={imgVideo} className="HomeLayout__header__buttons__img" />
          <InputSwitch
            name=""
            onHandleValueActive={handleToggleCategory}
            checked={false}
            value={''}
          />
          <img src={imgTv} className="HomeLayout__header__buttons__img" />
        </div>
      </div>

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
              />
            ))}
          {!toggleCategory &&
            popularTvPrograms?.map(
              ({ id, poster_path, name, vote_average }) => (
                <GenericCard
                  key={`${id}-movie`}
                  id={id}
                  title={name}
                  image={poster_path ?? ''}
                  vote_average={vote_average}
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
