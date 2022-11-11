import style from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import themeStyle from 'styles/theme.module.scss';
import React from 'react';

export default function DefaultPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa</div>
      </header>
      <div className={themeStyle.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
