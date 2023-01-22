import styled from '@emotion/styled';
import breakpoints from '@/assets/styles/breakpoints';
import { rem } from '@/assets/styles/_mixins';

const HeaderStyled = styled.header`
  color: #ffffff;
  padding: 5% 5% 2% 5%;

  .header {
    &__title {
      font-size: ${rem(42)};
      text-shadow: black 0.1em 0.1em 0.2em;
    }
  }
  @media (min-width: ${rem(breakpoints.tablet)}) {
  }
  @media (min-width: ${rem(breakpoints.tablet_wide)}) {
  }
  @media (min-width: ${rem(breakpoints.desktop)}) {
  }
`;
export default HeaderStyled;
