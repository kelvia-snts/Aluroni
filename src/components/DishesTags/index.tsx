import classNames from 'classnames';
import { Dishe } from 'types/dishe';
import style from './DishesTags.module.scss';

export default function DishesTags({ category, size, serving, price }: Dishe) {
  return (
    <div className={style.tags}>
      <div
        className={classNames({
          [style.tags__tipo]: true,
          [style[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={style.tags__porcao}>{size}g</div>
      <div className={style.tags__qtdpessoas}>
        serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={style.tags__valor}>{price.toFixed(2)}</div>
    </div>
  );
}
