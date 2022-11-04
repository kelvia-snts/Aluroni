import style from './Dishe.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import menuItem from 'data/MenuItem.json';
import DishesTags from 'components/DishesTags';

export default function Dishe() {
  const { id } = useParams();

  const dishe = menuItem.find((item) => item.id === Number(id));
  if (!dishe) {
    return '';
  }

  const navigate = useNavigate();

  return (
    <>
      <button className={style.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={style.container}>
        <h1 className={style.titulo}>{dishe.title}</h1>
        <div className={style.imagem}>
          <img src={dishe.photo} alt={dishe.title} />
        </div>
        <div className={style.conteudo}>
          <p className={style.conteudo__descricao}>{dishe.description}</p>
          <DishesTags {...dishe} />
        </div>
      </section>
    </>
  );
}
