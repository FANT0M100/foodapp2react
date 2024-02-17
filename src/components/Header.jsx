import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons";
import CatContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CatContext);
  const totalCartitems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>

      <nav>
        <Buttons textOnly>Cart ({totalCartitems})</Buttons>
      </nav>
    </header>
  );
};

export default Header;
