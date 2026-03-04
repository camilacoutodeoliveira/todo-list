import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}
export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskValue, setTaskValue] = useState(false);
  const [tasks, setTasks] = useState([] as Task[]);

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 letras!");
      return;
    }
    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: taskValue },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskTitle("");
  }

  function handleToggleTaskStatus(id: number) {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, done: !task.done } : task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);
  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="tasl-title">Adicionar Tarefas</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
            maxLength={20}
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
