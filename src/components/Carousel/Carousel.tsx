import { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import CarouselStyled from './Carousel.styled';
import { CategoryTitle } from '../CategoryTitle/CategoryTitle';

interface CarouselProps {
  children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <CarouselStyled className="Carousel">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        lazy={true}
        direction={'horizontal'}
        slidesPerView={'auto'}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        className="slider"
      >
        <CategoryTitle>Relacionados</CategoryTitle>
        {children}
      </Swiper>
    </CarouselStyled>
  );
};
