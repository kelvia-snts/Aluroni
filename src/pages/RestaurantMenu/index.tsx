import restaurantMenuStyle from "./RestaurantMenu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import SearchEngine from "./SearchEngine";
import Filters from "./SearchEngine/FIlters";
import Sort from "./Sort";

export default function RestaurantMenu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <main>
      <nav className={restaurantMenuStyle.menu}>
        <Logo />
      </nav>
      <header className={restaurantMenuStyle.header}>
        <div className={restaurantMenuStyle.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={restaurantMenuStyle.menu}>
        <h3 className={restaurantMenuStyle.menu__title}>Cardárpio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={restaurantMenuStyle.restaurantMenu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sort />
        </div>
      </section>
    </main>
  );
}
