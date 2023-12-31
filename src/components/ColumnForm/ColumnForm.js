import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'
import styles from './ColumnForm.module.scss';
import { addColumn } from '../../redux/columnsRedux';


const ColumnForm = props => {

  const {listId} = props;
  const dispatch = useDispatch();
  const resetForm = () => {
    setTitle('');
    setIcon('');
  }
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    resetForm();
  }

  return (
    <form className={styles.columnform} onSubmit={handleSubmit}>
      <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button children='Add column' />
    </form>
  );
};

export default ColumnForm;