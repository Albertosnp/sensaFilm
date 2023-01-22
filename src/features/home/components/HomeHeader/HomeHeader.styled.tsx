import styled from '@emotion/styled';
import breakpoints from '@/assets/styles/breakpoints';
import { rem } from '@/assets/styles/_mixins';

const HomeHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  .HomeHeader {
    &__title {
      color: #e9e8e8;
      font-size: ${rem(32)};
      font-weight: 600;
      position: relative;
      ::after {
        content: '';
        position: absolute;
        background-color: #c5a100;
        width: 40px;
        bottom: -20px;
        left: 0;
        padding: 3px;
      }
    }

    &__buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      &__img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        filter: invert();
      }
    }
  }
  @media (min-width: ${rem(breakpoints.tablet)}) {
  }
  @media (min-width: ${rem(breakpoints.tablet_wide)}) {
  }
  @media (min-width: ${rem(breakpoints.desktop)}) {
  }
`;
export default HomeHeaderStyled;
