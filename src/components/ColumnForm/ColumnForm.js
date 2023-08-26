import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'
import styles from './ColumnForm.module.scss';


const ColumnForm = props => {
 const resetForm = () => {
    setTitle('');
    setIcon('');
  }
  const [title, setTitle] = useState ('');
  const [icon, setIcon] = useState ('');
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    resetForm();
    console.log(icon, title);
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