import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSizes, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import HomeLink from 'shared/assets/icons/link-home.svg';
import AboutLink from 'shared/assets/icons/link-about.svg';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <nav className={cls.menu}>
        <ul>
          <li className={cls.item}>
            <AppLink to={RoutePaths.main} theme={AppLinkTheme.SECONDARY}>
              <span className={cls.icon}><HomeLink /></span>
              <span className={cls.text}>{t('Главная')}</span>
            </AppLink>
          </li>
          <li className={cls.item}>
            <AppLink to={RoutePaths.about} theme={AppLinkTheme.SECONDARY}>
              <span className={cls.icon}><AboutLink /></span>
              <span className={cls.text}>{t('О нас')}</span>
            </AppLink>
          </li>
        </ul>
      </nav>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>

      <Button
        data-testid="sidebar-toggle"
        onClick={toggleCollapsed}
        className={cls['collapse-btn']}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSizes.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
};
