import { useEffect, useState } from "react";
import Item from "./Item";
import menuItem from "./Items.json";
import itemsStyle from "./Items.module.scss";

interface Props {
  filter: number | null;
  search: string;
  sort: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(menuItem);
  const { filter, search } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  useEffect(() => {
    const newList = menuItem.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(newList);
  }, [filter, search]);

  return (
    <div className={itemsStyle.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
