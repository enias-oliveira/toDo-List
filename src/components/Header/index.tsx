import styles from './Header.module.css'
import TodoLogo from '../../assets/todo-logo.svg'

const Header = () => (
  <header className={styles.header}>
    <img src={TodoLogo} alt='Todo Logo' />
  </header>
)

export { Header }
