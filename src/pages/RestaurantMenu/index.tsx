import Button from "../../Components/Button";
import restaurantMenuStyle from "./RestaurantMenu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function RestaurantMenu() {
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
      <Button />
    </main>
  );
}
