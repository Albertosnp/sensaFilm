import { memo } from 'react';
import { Link } from 'react-router-dom';
import GenericCardStyled from './GenericCard.styled';

interface GenericCardProps {
  image: string;
  title: string;
  vote_average: number;
  path: string;
  id: number;
}
const GenericCard = ({
  image,
  title,
  vote_average,
  id,
  path,
}: GenericCardProps) => {
  return (
    <GenericCardStyled className="GenericCard">
      <Link to={`${path}/${id}`} className="GenericCard__link">
        <img
          className="GenericCard__image"
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt="imagen-picture"
        />
        <div className="GenericCard__footer">
          <p className="GenericCard__footer__title">{title}</p>

          <span className="GenericCard__footer__votes">{vote_average}/10</span>
        </div>
      </Link>
    </GenericCardStyled>
  );
};

export default memo(GenericCard);
