import { CategoryTitle, InputSwitch } from '@/components';
import HomeHeaderStyled from './HomeHeader.styled';

import imgTv from '@/assets/img/television.png';
import imgVideo from '@/assets/img/video.png';

interface HomeHeaderProps {
  toggleCategory: boolean;
  handleToggleCategory: () => void;
}

const TITLES = {
  movies: 'Películas destacadas',
  tv: 'Tv',
};

export const HomeHeader = ({
  toggleCategory,
  handleToggleCategory,
}: HomeHeaderProps) => {
  return (
    <HomeHeaderStyled className="HomeHeader">
      <CategoryTitle>
        {toggleCategory ? TITLES.movies : TITLES.tv}
      </CategoryTitle>
      <div className="HomeHeader__buttons">
        <img src={imgVideo} className="HomeHeader__buttons__img" />
        <InputSwitch
          name=""
          onHandleValueActive={handleToggleCategory}
          checked={false}
          value={''}
        />
        <img src={imgTv} className="HomeHeader__buttons__img" />
      </div>
    </HomeHeaderStyled>
  );
};
