import { useState } from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";
import { ListEmpty } from "./components/ListEmpty";

function App() {
  const [login, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 },
  ]);
  const [filterList, setFilterList] = useState(listTransactions);

  const [filter, setFilter] = useState("Todos");
  const filteredValueList = filterList.filter((value) =>
    filter === "Todos" ? true : value.type === filter
  );

  function addValue(newValue) {
    const setNewValue = [...listTransactions, newValue];
    setListTransactions(setNewValue);
    setFilterList(setNewValue);
  }

  function removeValue(valueName) {
    const newList = listTransactions.filter(
      (value) => value.description !== valueName
    );
    setListTransactions(newList);
    setFilterList(newList);
  }

  return (
    <div className="App">
      {login ? (
        <div>
          <Header setLogin={setLogin} />
          <main className="mainBody">
            <section className="leftColMain">
              <Form addValue={addValue} />
              <TotalMoney listTransactions={filterList} />
            </section>
            {filterList.length === 0 ? (
              <ListEmpty />
            ) : (
              <List
                filterList={filteredValueList}
                removeValue={removeValue}
                setFilter={setFilter}
              />
            )}
          </main>
        </div>
      ) : (
        <LandingPage setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
