import Container from "../Container/Container";
import styles from './NavBar.module.scss'; // Import modułu CSS

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles['navbar-content']}>
          <div className={styles['navbar-left']}> {/* Elementy po lewej stronie */}
            <a href="/" className={styles['navbar-icon-link']}>
              <i className={`fa fa-search ${styles['navbar-icon']}`}></i>
            </a>
          </div>
          <div className={styles['navbar-right']}> {/* Elementy po prawej stronie */}
            <ul className={styles['navbar-list']}>
              <li><a href="/">Home</a></li>
              <li><a href="/favorite">Favorite</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;