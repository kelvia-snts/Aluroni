import ItemStyle from './Item.module.scss';
import { Dishe } from 'types/dishe';
import DishesTags from 'components/DishesTags';

export default function Item(props: Dishe) {
  const { title, description, photo } = props;
  
  return (
    <div className={ItemStyle.item}>
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
