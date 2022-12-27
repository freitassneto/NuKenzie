import { useState } from "react";
import "./styles.css";

export function Form({ addValue }) {
  const [form, setForm] = useState({
    description: "",
    value: "",
    type: "Entrada",
  });

  function submit(event) {
    event.preventDefault();
    addValue(form);
    setForm({
      description: "",
      value: "",
      type: "Entrada",
    });
  }

  return (
    <form onSubmit={submit} className="form">
      <div className="topForm">
        <label htmlFor="description">Descrição</label>
        <input
          required
          name="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={form.description}
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="midForm">
        <div className="divValue">
          <label htmlFor="value">Valor</label>
          <input
            required
            name="value"
            type="number"
            placeholder="R$1"
            min={1}
            value={form.value}
            onChange={(event) =>
              setForm({ ...form, value: event.target.value })
            }
          />
        </div>

        <div className="divValueType">
          <label htmlFor="type">Tipo de valor</label>
          <select
            required
            id="select"
            name="type"
            value={form.type}
            onChange={(event) => setForm({ ...form, type: event.target.value })}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button className="primaryBtn" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}
