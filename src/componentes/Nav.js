import "./Nav.css";
import CartWidget from "./CartWidget";

let Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Consolas</h1>
      </div>
      <ul>
        <li>
          {" "}
          <a href="##">NINTENDO</a>{" "}
        </li>
        <li>
          {" "}
          <a href="##">PLAYSTATION</a>{" "}
        </li>
        <li>
          {" "}
          <a href="##">XBOX</a>{" "}
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default Nav;
