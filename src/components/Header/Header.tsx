import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";
import { useState } from "react";
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem vinda, Camila</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={0} />
          <StatsCard title="Tarefas Pendentes" value={0} />
          <StatsCard title="Tarefas Concluídas" value={0} />
        </div>
      </div>
    </header>
  );
};
