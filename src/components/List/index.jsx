import "./styles.css";

export function List({ filterList, removeValue, setFilter }) {
  return (
    <ul className="valueList">
      <div className="listHeader">
        <h3>Resumo financeiro</h3>
        <div className="catFilter">
          <button onClick={() => setFilter("Todos")}>Todos</button>
          <button onClick={() => setFilter("Entrada")}>Entradas</button>
          <button onClick={() => setFilter("Saída")}>Saídas</button>
        </div>
      </div>
      {filterList.map((value, index) => (
        <li key={index} className="card" onClick={() => setFilter(value.type)}>
          <button
            className="trashBtn"
            onClick={() => removeValue(value.description)}
          ></button>
          <div className="divCard">
            <h3>{value.description}</h3>
            <p>R$ {value.type === "Saída" ? `-${value.value}` : value.value}</p>
          </div>
          <p className="valueType">{value.type}</p>
        </li>
      ))}
    </ul>
  );
}
