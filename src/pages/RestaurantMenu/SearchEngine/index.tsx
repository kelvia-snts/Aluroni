import SearchEngineStyle from "./SearchEngine.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: Props) {
  return (
    <div className={SearchEngineStyle.SearchEngine}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4d4d5e" cursor="pointer" />
    </div>
  );
}
