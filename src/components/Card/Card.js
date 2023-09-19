import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux'


const Card = (props) => {
  const { title, isFavorite, onToggleFavorite, cardId } = props;

  const handleToggleFavorite = () => {
    // Wywołaj funkcję przekazaną jako props, aby obsłużyć kliknięcie w przycisk "ulubienia"
    onToggleFavorite();
  };
  const dispatch = useDispatch();
  console.log(cardId);

  return (
    <li className={styles.card}>
      {title}
      <button
        className={styles.favoriteButton}
        style={{ color: isFavorite ? 'gold' : 'gray' }}
        onClick={handleToggleFavorite}
      >
        <i className="fa fa-star-o" />
      </button>
      <button onClick={() => dispatch(removeCard(cardId))}><i className="fa fa-trash" /></button>
    </li>
  );
};

export default Card;