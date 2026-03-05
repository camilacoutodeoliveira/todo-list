import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";
import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContexts";
export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);
  const totalPendingTasks = tasks.filter((task) => !task.done).length;
  const totalDoneTasks = tasks.filter((task) => task.done).length;
  const totalTasks = tasks.length;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem vinda, Camila</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPendingTasks} />
          <StatsCard title="Tarefas Concluídas" value={totalDoneTasks} />
        </div>
      </div>
    </header>
  );
};
