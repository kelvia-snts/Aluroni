import style from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/notFound.svg';

import classNames from 'classnames';
import themeStyle from 'styles/theme.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [style.container]: true,
        [themeStyle.container]: true,
      })}
    >
      <div className={style.voltar}>
        <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
      </div>
      <NotFoundImage />
    </div>
  );
}
