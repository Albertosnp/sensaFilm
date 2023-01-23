import styled from '@emotion/styled';
import breakpoints from '@/assets/styles/breakpoints';
import { rem } from '@/assets/styles/_mixins';

const CategoryTitleStyled = styled.h3`
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

  .CategoryTitle {
  }
  @media (min-width: ${rem(breakpoints.tablet)}) {
  }
  @media (min-width: ${rem(breakpoints.tablet_wide)}) {
  }
  @media (min-width: ${rem(breakpoints.desktop)}) {
  }
`;
export default CategoryTitleStyled;
