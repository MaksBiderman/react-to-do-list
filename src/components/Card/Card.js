import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const { title, isFavorite, onToggleFavorite } = props;

  const handleToggleFavorite = () => {
    // Wywołaj funkcję przekazaną jako props, aby obsłużyć kliknięcie w przycisk "ulubienia"
    onToggleFavorite();
  };

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
    </li>
  );
};

export default Card;