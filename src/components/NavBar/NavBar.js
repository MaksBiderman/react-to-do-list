import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles['navbar-content']}>
          <div className={styles['navbar-left']}>
            <a href="/" className={styles['navbar-icon-link']}>
              <i className={`fa fa-search ${styles['navbar-icon']}`}></i>
            </a>
          </div>
          <div className={styles['navbar-right']}>
            <ul className={styles['navbar-list']}>
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorite"
                  className={({ isActive }) => isActive ? styles.linkActive : undefined}
                >
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? styles.linkActive : undefined}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;