import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { getFilteredCards } from '../../redux/cardsRedux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Column = (props) => {

  const cards = useSelector(state => getFilteredCards(state, props.id));
  console.log('Column render');
  const memoizedCards = useMemo(() => cards, [cards]);
  const dispatch = useDispatch();
  const handleToggleFavorite = (cardId) => {
    // Wywołaj akcję Redux, aby zmienić stan ulubienia karty
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {memoizedCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            cardId={card.id}
            isFavorite={card.isFavorite}
            onToggleFavorite={() => handleToggleFavorite(card.id)}
          />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;