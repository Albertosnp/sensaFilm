import styled from '@emotion/styled';
import breakpoints from '@/assets/styles/breakpoints';
import { rem } from '@/assets/styles/_mixins';

const CarouselStyled = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 50px;

  .Carousel {
  }
  .swiper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-wrapper {
      gap: 7px;
    }

    &-slide {
      width: auto !important;
      max-width: 100% !important;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
    }
  }
  @media (min-width: ${rem(breakpoints.tablet)}) {
  }
  @media (min-width: ${rem(breakpoints.tablet_wide)}) {
  }
  @media (min-width: ${rem(breakpoints.desktop)}) {
  }
`;
export default CarouselStyled;
