import Item from "./Item";
import menuItems from "./Items.json";
import itemsStyle from "./Items.module.scss";

export default function Items() {
  return (
    <div className={itemsStyle.items}>
      {menuItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
