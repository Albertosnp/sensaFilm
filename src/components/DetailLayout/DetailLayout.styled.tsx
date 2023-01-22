import styled from '@emotion/styled';
import breakpoints from '@/assets/styles/breakpoints';
import { rem } from '@/assets/styles/_mixins';

const DetailLayoutStyled = styled.section<{ backgroudImg: string }>`
  position: absolute;
  top: 0;

  height: 60%;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => props.backgroudImg};

  .DetailLayout {
    &__info {
      padding: 10%;
      position: relative;
      z-index: 1;
      top: 150px;
      color: #fff;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;

      &__imgPoster {
        width: 250px;
        height: auto;
        box-shadow: rgba(0, 0, 0, 0.644) 3px 3px 6px;
        border-radius: 5px;
      }

      &__detailsBlock {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        gap: 10px;

        &__title {
          font-size: ${rem(31)};
          padding-bottom: 20px;
        }

        &__overview {
          text-shadow: black 0.1em 0.1em 0.2em;
          max-width: 600px;
          font-size: ${rem(14)};
        }
      }
    }

    &__gradient {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 60%,
        #232228 100%
      );
    }

    &__detailTitle {
      font-size: ${rem(18)};
      padding-bottom: 10px;
    }
  }
  @media (min-width: ${rem(breakpoints.tablet)}) {
  }
  @media (min-width: ${rem(breakpoints.tablet_wide)}) {
    height: 70%;
    .DetailLayout {
      &__info {
        flex-direction: row;
      }
    }
  }
  @media (min-width: ${rem(breakpoints.desktop)}) {
  }
`;
export default DetailLayoutStyled;
