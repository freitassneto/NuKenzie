import "./styles.css";
import logo from "../../assets/NuKenzie1.svg";
import ilustration from "../../assets/illustration.svg";

export function LandingPage({ setLogin }) {
  return (
    <div className="main">
      <section className="leftCol">
        <img src={logo} alt="Logo NuKenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <span className="spanLP">de forma rápida de segura</span>
        <button className="btnLP" onClick={() => setLogin(true)}>
          Iniciar
        </button>
      </section>
      <section className="rightCol">
        <img src={ilustration} alt="Logo NuKenzie" />
      </section>
    </div>
  );
}
