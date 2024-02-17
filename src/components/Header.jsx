import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>

      <nav>
        <Buttons textOnly>Cart (0)</Buttons>
      </nav>
    </header>
  );
};

export default Header;
