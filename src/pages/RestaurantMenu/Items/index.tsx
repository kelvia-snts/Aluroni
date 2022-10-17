import { useEffect, useState } from "react";
import Item from "./Item";
import menuItem from "./Items.json";
import itemsStyle from "./Items.module.scss";

interface Props {
  filter: number | null;
  search: string;
  orderer: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(menuItem);
  const { filter, search, orderer } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function order(newList: typeof menuItem) {
    switch (orderer) {
      case "porcao":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menuItem.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(order(newList));
  }, [filter, search, orderer]);

  return (
    <div className={itemsStyle.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
