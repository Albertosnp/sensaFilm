import {
  ChangeEvent,
  LegacyRef,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';

import { InputSwitchStyled } from './InputSwitch.styled';

interface InputSwitchProps {
  name: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  onHandleValueActive?: () => void;
}

const InputSwitch = ({
  name,
  value,
  checked,
  disabled = false,
  onHandleValueActive,
}: InputSwitchProps) => {
  const refInput = useRef<HTMLInputElement | null>(null!);

  useEffect(() => {
    if (!refInput.current) throw Error('divRef is not assigned');
    if (checked) return refInput.current.click();

    if (refInput.current.checked) return refInput.current.click();
  }, []);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onHandleValueActive && onHandleValueActive();
  };

  return (
    <InputSwitchStyled className="inputSwitch">
      <label className="inputSwitch__label">
        {name}
        <input
          ref={refInput}
          className="inputSwitch__input"
          type="checkbox"
          disabled={disabled}
          name={name}
          value={value}
          onChange={onHandleChange}
          id={`${name}-${value}`}
        />
        <span className="inputSwitch__label__icon"></span>
      </label>
    </InputSwitchStyled>
  );
};

export default memo(InputSwitch);
