import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'
import styles from './ListForm.module.scss';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {

  const dispatch = useDispatch();
  const{listId} = props;

  const[title, setTitle] = useState('');
  const[description,setDescription] = useState('');


  const resetForm = () => {
    setDescription('');
    setTitle('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description, listId}));
    resetForm();
  }

  return (
    <form className={styles.listform} onSubmit={handleSubmit}>
      <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span>Description:</span> <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button children='Add list' />
    </form>
  );
}
export default ListForm;