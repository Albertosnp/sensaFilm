import { $fontSizebase } from '../_variables/sizes';
export const rem = (size: number) => {
  return `${size / $fontSizebase}rem`;
};
