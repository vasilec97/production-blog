import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSizes {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSizes;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = '',
    children,
    square,
    size = ButtonSizes.M,
    ...rest
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={
        classNames(cls.Button, mods, [className, cls[theme], cls[size]])
      }
      {...rest}
    >
      {children}
    </button>
  );
};
