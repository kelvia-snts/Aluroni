import menuItem from 'data/MenuItem.json';
import startStyle from './Start.module.scss';

export default function Start() {
  let recommendedDishes = [...menuItem];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={startStyle.title}>Recomendações da cozinha</h3>

      <div className={startStyle.recomendados}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={startStyle.recomendado}>
            <div className={startStyle.recomendado__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={startStyle.recomendado__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
