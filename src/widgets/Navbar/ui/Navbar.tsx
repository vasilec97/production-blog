import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleIsAuthOpen = useCallback(() => {
    setIsAuthOpen((prev) => !prev);
  }, []);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={toggleIsAuthOpen}
      >
        {t('Войти')}
      </Button>
      {isAuthOpen && (
        // eslint-disable-next-line i18next/no-literal-string
        <Modal onClose={toggleIsAuthOpen}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Error fugiat beatae
          autem laudantium? Maxime delectus
          totam possimus atque maiores, dolores tempora,
          aliquid sint dolorum dolorem molestiae voluptate obcaecati.
          Cupiditate, tempore.
        </Modal>
      )}
    </header>
  );
};
