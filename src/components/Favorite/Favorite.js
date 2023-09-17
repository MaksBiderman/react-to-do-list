import React from 'react';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteCards, toggleCardFavorite } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);
  const dispatch = useDispatch();

  // Definiuj funkcję handleToggleFavorite w komponencie Favorite
  const handleToggleFavorite = (cardId) => {
    // Wywołaj akcję Redux toggleCardFavorite, aby zmienić stan ulubienia karty
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <div className={styles.favorite}>
      <PageTitle children={'FAVORITE'} />
      <ul className={styles.cardList}>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            onToggleFavorite={() => handleToggleFavorite(card.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;