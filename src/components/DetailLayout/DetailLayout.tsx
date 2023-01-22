import { BASE_URL } from '@/config';
import DetailLayoutStyled from './DetailLayout.styled';

interface DetailLayoutProps {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
}

export const DetailLayout = ({
  id,
  backdrop_path,
  poster_path,
  overview,
  title,
}: DetailLayoutProps) => {
  console.log(id, backdrop_path, poster_path, overview, title);
  const style = {
    backgroundImage: `url('${BASE_URL}${backdrop_path}')`,
  };
  return (
    <DetailLayoutStyled
      className="DetailLayout"
      backgroudImg={style.backgroundImage}
    >
      <div className="DetailLayout__gradient" />
      <article className="DetailLayout__info">
        <img
          src={`${BASE_URL}${poster_path}`}
          className="DetailLayout__info__imgPoster"
        />

        <div className="DetailLayout__info__detailsBlock">
          <p className="DetailLayout__info__detailsBlock__title">{title}</p>
          <h6 className="DetailLayout__detailTitle">Sinopsis:</h6>
          <p className="DetailLayout__info__detailsBlock__overview">
            {overview}
          </p>
        </div>
      </article>
    </DetailLayoutStyled>
  );
};
