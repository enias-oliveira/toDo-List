import { TaskData } from '../../App'
import ClipboardIcon from '../../assets/clipboard-icon.svg'
import { Task } from '../Task'

import styles from './styles.module.css'

interface TasksPropTypes {
  data: TaskData[]
  acquireCheckTaskHandler: (task: TaskData) => () => void
  acquireDeleteTaskHandler: (task: TaskData) => () => void
}

const Tasks = ({
  data: tasks,
  acquireCheckTaskHandler,
  acquireDeleteTaskHandler,
}: TasksPropTypes) => {
  const completedTaskCount = tasks.reduce(
    (acc, cur) => (cur.completed ? acc + 1 : acc),
    0,
  )

  return (
    <div className={styles.wrapper}>
      <header>
        <strong className={styles.createdTasksCount}>
          Tarefas criadas<span>{tasks.length}</span>
        </strong>
        <strong className={styles.completedTasksCount}>
          Concluídas
          <span>
            {completedTaskCount} de {tasks.length}
          </span>
        </strong>
      </header>
      <main>
        {tasks.length === 0 ? (
          <div className={styles.emptyList}>
            <img src={ClipboardIcon} alt='clipboard icon' />
          </div>
        ) : (
          <ul className={styles.tasksList}>
            {tasks.map((task) => (
              <Task
                data={task}
                onCheckTask={acquireCheckTaskHandler(task)}
                onDeleteTask={acquireDeleteTaskHandler(task)}
              />
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

export { Tasks }
