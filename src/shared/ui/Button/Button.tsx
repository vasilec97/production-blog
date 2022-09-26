import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = '',
    children,
    ...rest
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
