import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons";
import CatContext from "../store/CartContext";
import UserProgresContext from "../store/UserProgresContext";

const Header = () => {
  const cartCtx = useContext(CatContext);
  const userProgressCtx = useContext(UserProgresContext);

  const totalCartitems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>

      <nav>
        <Buttons textOnly onClick={handleShowCart}>
          Cart ({totalCartitems})
        </Buttons>
      </nav>
    </header>
  );
};

export default Header;
