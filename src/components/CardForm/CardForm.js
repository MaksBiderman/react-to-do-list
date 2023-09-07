import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'
import styles from './CardForm.module.scss';

const CardForm = props => {
  const {columnId} = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState ('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type:'ADD_CARD', payload:{title, columnId}});
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