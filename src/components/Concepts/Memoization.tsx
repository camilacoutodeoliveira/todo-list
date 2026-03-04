import { useCallback, useMemo, useState } from "react";

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}
export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  const [showValues, setShowValues] = useState(true);
  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      return (total += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes]);

  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutcomes * (1 - desconto);
    },
    [totalOutcomes],
  );

  return (
    <div>
      <h1>Memoization</h1>
      <h2>useMemo</h2>

      <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : "XXX"}`}</p>
      <p>{`Total de Despesas: R$ ${showValues ? totalOutcomes : "XXX"}`}</p>
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "Ocultar valors" : "Mostrar valores"}
      </button>
    </div>
  );
};
