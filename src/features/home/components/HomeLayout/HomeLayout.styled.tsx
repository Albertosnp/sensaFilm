import styled from '@emotion/styled';
import breakpoints from '@/assets/styles/breakpoints';
import { rem } from '@/assets/styles/_mixins';

const HomeLayoutStyled = styled.div`
  padding: 5%;
  .HomeLayout {
    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      column-gap: 30px;
      row-gap: 50px;
    }
  }
  @media (min-width: ${rem(breakpoints.tablet)}) {
  }
  @media (min-width: ${rem(breakpoints.tablet_wide)}) {
  }
  @media (min-width: ${rem(breakpoints.desktop)}) {
  }
`;
export default HomeLayoutStyled;
