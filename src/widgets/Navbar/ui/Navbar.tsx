import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <nav>
        <ul>
          <li><AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('Ссылка на главную страницу')}</AppLink></li>
          <li><AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('Ссылка на страницу о нас')}</AppLink></li>
        </ul>
      </nav>
    </div>
  );
};
