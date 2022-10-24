import style from './DefaultPage.module.scss';
import {Outlet} from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa</div>
      </header>
      <div>
        <Outlet/>
      </div>
    </>
  );
}
