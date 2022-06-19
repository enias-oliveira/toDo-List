import TodoLogo from './assets/todo-logo.svg'

import './styles/global.css'
import styles from './App.module.css'

function App() {
    return (
        <>
            <header className={styles.header}>
                <img src={TodoLogo} alt="Todo Logo" />
            </header>
        </>
    )
}

export default App
