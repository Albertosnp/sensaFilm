import { ReactNode } from 'react';
import CategoryTitleStyled from './CategoryTitle.styled';

interface CategoryTitleProps {
  children: ReactNode;
}
export const CategoryTitle = ({ children }: CategoryTitleProps) => {
  return (
    <CategoryTitleStyled className="CategoryTitle">
      {children}
    </CategoryTitleStyled>
  );
};
