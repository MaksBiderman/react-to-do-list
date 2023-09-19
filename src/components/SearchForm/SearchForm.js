import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchform } from '../../redux/searchStringRedux';
const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.searchString);
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    // Ustawienie początkowej wartości inputValue na searchString po zainicjowaniu komponentu
    setInputValue(searchString);
  }, [searchString]);


const handleSubmit = e => {
  e.preventDefault();
  dispatch(updateSearchform(inputValue));


}
const handleInputChange = (e) => {
  setInputValue(e.target.value); 
  
};
  return (
      <form className={styles.searchForm}  onSubmit={handleSubmit}>
        <TextInput placeholder="Search..." value={inputValue} onChange={handleInputChange}/>
        <Button>
          <span className="fa fa-search" />
        </Button>
      </form>

  );
};

export default SearchForm;