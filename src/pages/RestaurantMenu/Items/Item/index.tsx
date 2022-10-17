import ItemStyle from "./Item.module.scss";
import menuItem from "../Items.json";
import classNames from "classnames";

type Props = typeof menuItem[0];

export default function Item(props: Props) {
  const { title, description, category, size, serving, price, photo } = props;

  return (
    <div className={ItemStyle.item}>
      <div className={ItemStyle.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={ItemStyle.item__description}>
        <div className={ItemStyle.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={ItemStyle.item__tags}>
          <div
            className={classNames({
              [ItemStyle.item__type]: true,
              [ItemStyle[`item__type__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={ItemStyle.item__portion}>{size}g</div>
          <div className={ItemStyle.item__qttpeople}>
            serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={ItemStyle.item__value}>{price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
