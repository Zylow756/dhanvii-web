import styles from './Header.module.css';
import logo from '../../assets/images/logo.jpeg';

const Header = () => {
  return (
    <header className={styles.header}>
                    <img src={logo} alt="Logo" width="270px" height="100px" />
    </header>
  );
};
export default Header;