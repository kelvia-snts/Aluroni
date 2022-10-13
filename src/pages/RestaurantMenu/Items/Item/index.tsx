import logo from "assets/logo.svg";
import ItemStyle from "./Item.module.scss";

export default function Item() {
  return (
    <div className={ItemStyle.item}>
      <div className={ItemStyle.item__image}>
        <img src={logo} alt="Imagem" />
      </div>
      <div className={ItemStyle.item__description}>
        <div className={ItemStyle.item__title}>
          <h2>Macarrão</h2>
          <p>Descrição macarrão</p>
        </div>
        <div className={ItemStyle.item__tags}>
          <div className={ItemStyle.item__type}>Massas</div>
          <div className={ItemStyle.item__portion}>400Gr</div>
          <div className={ItemStyle.item__qttpeople}>Serve duas pessoas</div>
          <div className={ItemStyle.item__value}>R$ 50,00</div>
        </div>
      </div>
    </div>
  );
}
