import React, {
  ReactNode, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal = ({
  className, children, onClose,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const closingTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const mods = {
    [cls.closed]: isClosing,
  };

  const closeHandler = () => {
    setIsClosing(true);

    closingTimer.current = setTimeout(() => {
      if (onClose) onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeHandler();
  };

  const contentHandler = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearInterval(closingTimer.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={`${cls.content}`}
            onClick={contentHandler}
          >
            {/* <button type="button" onClick={closeHandler}>Close</button> */}
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
