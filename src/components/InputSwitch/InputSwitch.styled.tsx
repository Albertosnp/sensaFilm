import styled from '@emotion/styled';

const InputSwitchStyled = styled.div`
  .inputSwitch {
    &__label {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      &__icon {
        display: inline-block;
        position: relative;
        width: calc(42px - 4px);
        height: calc(42px / 2);
        border: none;
        border-radius: 42px;
        background-color: #fd26c7;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        &:after {
          content: '';
          position: absolute;
          width: calc((42px / 2) - 4px);
          height: calc((42px / 2) - 4px);
          border-radius: calc((42px / 2) - 4px);
          background-color: #ffffff;
          left: 2px;
          top: 2px;
          cursor: pointer;
          transition: left 0.2s ease-in-out, width 0.2s ease-in-out;
        }
      }
    }
    &__input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      border: 0;
      &:checked + .inputSwitch__label__icon {
        background-color: #725bff;
        &:after {
          left: calc(calc(42px - 4px) - calc((42px / 2) - 4px) - 2px);
        }
      }
      &:disabled + .inputSwitch__label__icon {
        opacity: 0.3;
      }
    }
  }
`;

export { InputSwitchStyled };
