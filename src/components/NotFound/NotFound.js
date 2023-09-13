import PageTitle from '../PageTitle/PageTitle'
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <PageTitle children={'404 NOT FOUND'}/>
    </div>
  )
}
export default NotFound;