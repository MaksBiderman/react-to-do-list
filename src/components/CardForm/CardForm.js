import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'
import styles from './CardForm.module.scss';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {
  const {columnId} = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState ('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({title, columnId}));
    setTitle('');

  }

  return (
    <form className={styles.cardfrom} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button children='add'/>
    </form>
  );
};

export default CardForm;