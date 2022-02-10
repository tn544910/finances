import { ReactElement, ReactNode } from "react";
import "./table.css";

export interface Table {
  header: HeaderRow;
  rows: BodyRow[];
}

export function Table({ header, rows }: Table): ReactElement {
  return (
    <div className="table">
      <HeaderRow name={header.name} amount={header.amount} />
      {rows.map((row, index) => (
        <BodyRow key={index} name={row.name} amount={row.amount} />
      ))}
    </div>
  );
}

interface HeaderRow {
  name: string;
  amount: string;
}

interface BodyRow {
  name: string;
  amount: number;
}

interface PureRow {
  type: "header" | "body";
  children?: ReactNode;
}

function HeaderRow({ name, amount }: HeaderRow): ReactElement {
  return (
    <Row type="header">
      <HeaderCell value={name} />
      <HeaderCell value={amount} />
    </Row>
  );
}

function BodyRow({ amount, name }: BodyRow): ReactElement {
  return (
    <Row type="body">
      <NameCell value={name} />
      <CurrencyCell value={amount} />
    </Row>
  );
}

function Row({ type, children }: PureRow): ReactElement {
  return <div className={`table-row-${type}`}>{children}</div>;
}

interface StringCell {
  value: string;
}

interface CurrencyCell {
  value: number;
}

function HeaderCell({ value }: StringCell) {
  return <PureCell value={value} type="header" />;
}

function NameCell({ value }: StringCell): ReactElement {
  return <PureCell value={value} type="name" />;
}

function CurrencyCell({ value }: CurrencyCell): ReactElement {
  return <PureCell value={toEuro(value)} type="currency" />;
}

interface PureCell {
  value: string;
  type: "header" | "name" | "currency";
}

function PureCell({ value, type }: PureCell): ReactElement {
  return <div className={`table-cell-${type}`}>{value}</div>;
}

function toEuro(value: number): string {
  const withDecimals = value.toFixed(2);
  return `${withDecimals} €`;
}
