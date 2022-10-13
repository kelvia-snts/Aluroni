import sortStyle from "./Sort.module.scss";
import options from "./options.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sort({ sort, setSort }: Props) {
  const [open, setOpen] = useState(false);
  const sortName =
    sort && options.find((option) => option.value === sort)?.name;

  return (
    <button
      className={classNames({
        [sortStyle.sort]: true,
        [sortStyle["sort--active"]]: sort !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sortName || "Ordenar Por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [sortStyle.sort__options]: true,
          [sortStyle["sort__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={sortStyle.sort__option}
            key={option.value}
            onClick={() => setSort(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
