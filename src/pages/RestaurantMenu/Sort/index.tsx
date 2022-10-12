import sortStyle from "./Sort.module.scss";
import options from "./options.json";

export default function Sort() {
  return (
    <button className={sortStyle.sort}>
      <span>Ordenar Por</span>
      <div className={sortStyle.sort__options}>
        {options.map((option) => (
          <div className={sortStyle.sort__option} key={option.value}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
