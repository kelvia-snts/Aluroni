import { useEffect, useState } from 'react';
import Item from './Item';
import menuItem from 'data/MenuItem.json';
import itemsStyle from './Items.module.scss';

interface Props {
  filter: number | null;
  search: string;
  orderer: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(menuItem);
  const { filter, search, orderer } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  const sortPropertyAscending = (
    list: typeof menuItem,
    property: 'size' | 'serving' | 'price'
  ) => {
    return list.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };

  function order(newList: typeof menuItem) {
    switch (orderer) {
    case 'porcao':
      return sortPropertyAscending(newList, 'size');
    case 'qtd_pessoas':
      return sortPropertyAscending(newList, 'serving');
    case 'preco':
      return sortPropertyAscending(newList, 'price');
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
