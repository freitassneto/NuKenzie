import "./styles.css";
import logo from "../../assets/NuKenzieDefault.svg";

export function Header({ setLogin }) {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logo NuKenzie" />
        <button onClick={() => setLogin(false)}>Início</button>
      </div>
    </header>
  );
}
