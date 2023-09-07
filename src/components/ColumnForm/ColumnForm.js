import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'
import styles from './ColumnForm.module.scss';


const ColumnForm = props => {
  const dispatch = useDispatch();
 const resetForm = () => {
    setTitle('');
    setIcon('');
  }
  const [title, setTitle] = useState ('');
  const [icon, setIcon] = useState ('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type:'ADD_COLUMN', payload: { title, icon } });
    resetForm();
}

  return (
    <form className={styles.columnform} onSubmit={handleSubmit}>
      <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button children='Add column'/>
    </form>
  );
};

export default ColumnForm;