import ItemStyle from './Item.module.scss';
import { Dishe } from 'types/dishe';
import DishesTags from 'components/DishesTags';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Dishe) {
  const { id, title, description, photo } = props;

  const navigate = useNavigate();
  
  return (
    <div className={ItemStyle.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={ItemStyle.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={ItemStyle.item__description}>
        <div className={ItemStyle.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <DishesTags {...props} />
      </div>
    </div>
  );
}
