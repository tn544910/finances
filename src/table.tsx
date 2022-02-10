import { ReactElement } from "react";

export function Table(): ReactElement {
  return (
    <div>
      <Row />
    </div>
  );
}

function Row(): ReactElement {
  return <div>1</div>;
}
