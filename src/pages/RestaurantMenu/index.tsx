import restaurantMenuStyle from './RestaurantMenu.module.scss';
import { useState } from 'react';
import SearchEngine from './SearchEngine';
import Filters from './SearchEngine/FIlters';
import Sort, { OptionsOrder } from './Sort';
import Itens from './Items';

export default function RestaurantMenu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [orderer, setOrderer] = useState<OptionsOrder>('');

  return (
    <section className={restaurantMenuStyle.menu}>
      <h3 className={restaurantMenuStyle.menu__title}>Cardárpio</h3>
      <SearchEngine search={search} setSearch={setSearch} />
      <div className={restaurantMenuStyle.restaurantMenu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Sort orderer={orderer} setOrderer={setOrderer} />
      </div>
      <Itens search={search} filter={filter} orderer={orderer} />
    </section>
  );
}
