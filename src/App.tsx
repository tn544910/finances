import "./app.css";
import { Table } from "./table";

const incomeData: Table = {
  header: { name: "Einkommen", amount: "Betrag" },
  rows: [
    { name: "Arbeit", amount: 2637 },
    { name: "DAZN", amount: 5 },
  ],
};

const expenseData: Table = {
  header: { name: "Ausgaben", amount: "Betrag" },
  rows: [
    { name: "Miete", amount: 680 },
    { name: "Strom", amount: 37 },
    { name: "Gas", amount: 14 },
  ],
};

function App() {
  return (
    <div className="app">
      <div className="app-title">FINANZEN</div>
      <Table header={incomeData.header} rows={incomeData.rows} />
      <Table header={expenseData.header} rows={expenseData.rows} />
    </div>
  );
}

export default App;
