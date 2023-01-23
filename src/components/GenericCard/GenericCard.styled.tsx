import styled from '@emotion/styled';
import breakpoints from '@/assets/styles/breakpoints';
import { rem } from '@/assets/styles/_mixins';

const GenericCardStyled = styled.figure`
  border-radius: 25px;
  height: auto;
  background-color: #e6e6e6;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: transform 0.5s;
  margin: 0 auto;
  /* height: 450px; */
  align-self: center;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    transform: scale(1.1);
    z-index: 1;
  }

  .GenericCard {
    &__link {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 25px 25px 0 0;
      flex: 1 1 auto;
      max-height: 400px;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      font-weight: 600;

      &__title {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 200px;

        font-size: ${rem(14)};
        color: #232228;
      }
      &__votes {
        font-size: ${rem(16)};
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
export default GenericCardStyled;
