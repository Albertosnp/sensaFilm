import { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import CarouselStyled from './Carousel.styled';

interface CarouselProps {
  children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <CarouselStyled className="Carousel">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        direction={'horizontal'}
        slidesPerView={'auto'}
        autoplay={true}
        className="slider"
      >
        {children}
      </Swiper>
    </CarouselStyled>
  );
};
