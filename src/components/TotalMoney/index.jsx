import { useState } from "react";
import "./styles.css";

export function TotalMoney({ listTransactions }) {
  return (
    <div className="divTotal">
      <div>
        <h3>Valor total:</h3>
        <p>
          {listTransactions.reduce((prevValue, actValue) => {
            if (actValue.type === "Saída") {
              return prevValue - actValue.value;
            }
            return prevValue + actValue.value;
          }, 0)}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}
