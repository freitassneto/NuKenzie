import "./styles.css";
import NoCard from "../../assets/NoCard.svg";

export function ListEmpty() {
  return (
    <div className="valueList">
      <div className="listHeader">
        <h3>Resumo financeiro</h3>
        <div className="catFilter">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Saídas</button>
        </div>
      </div>
      <h3>Você ainda não possui nenhum lançamento</h3>
      <img src={NoCard}></img>
    </div>
  );
}
