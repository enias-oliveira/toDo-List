import { Check, PlusCircle, Trash } from 'phosphor-react'

import { Header } from './components/Header'
import ClipboardIcon from './assets/clipboard-icon.svg'

import './styles/global.css'
import styles from './App.module.css'
import { useState } from 'react'

export const App = () => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.newTaskWrapper}>
          <input
            type='text'
            name='new-task'
            value=''
            placeholder='Adicione uma nova tarefa'
          />
          <button type='submit' name='add-new-task'>
            Criar <PlusCircle />
          </button>
        </form>

        <div className={styles.tasks}>
          <header>
            <strong className={styles.createdTasksCount}>
              Tarefas criadas<span>0</span>
            </strong>
            <strong className={styles.completedTasksCount}>
              Concluídas<span>0</span>
            </strong>
          </header>
          <main>
            {false ? (
              <div className={styles.emptyTasks}>
                <img src={ClipboardIcon} alt='clipboard icon' />
              </div>
            ) : (
              <ul className={styles.tasksList}>
                <li>
                  <label>
                    <input
                      type='checkbox'
                      onChange={() => setChecked((state) => !state)}
                    />
                    <span
                      className={
                        checked ? styles.checkboxActive : styles.checkbox
                      }
                    >
                      {checked && <Check size={10} weight='bold' />}
                    </span>
                    <p>
                      Nunc eget lorem dolor, sed? Sagittis vitae et leo duis ut
                      diam quam nulla porttitor massa id neque aliquam
                    </p>
                  </label>
                  <button>
                    <Trash size={16} />
                  </button>
                </li>
              </ul>
            )}
          </main>
        </div>
      </div>
    </>
  )
}
