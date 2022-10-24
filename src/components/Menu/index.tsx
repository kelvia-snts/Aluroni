import { ReactComponent as Logo } from 'assets/logo.svg';
import MenuStyle from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const routes = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];

  return (
    <nav className={MenuStyle.menu}>
      <Logo />
      <ul className={MenuStyle.menu__list}>
        {routes.map((route, index) => (
          <li key={index} className={MenuStyle.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
