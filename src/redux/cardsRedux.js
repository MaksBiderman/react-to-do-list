import shortid from 'shortid';
import { strContains } from '../utils/strContains';

// Selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCards = (state) => state.cards.filter((card) => card.isFavorite === true);

// Creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = (cardId) => ({ type: 'TOGGLE_CARD_FAVORITE', payload: cardId });
export const removeCard = cardId => ({ type: REMOVE_CARD, payload: cardId });

// Actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');


const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
};
export default cardsReducer;