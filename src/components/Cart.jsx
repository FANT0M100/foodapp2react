import { useContext } from "react";
import Modal from "./UI/Modal";
import CatContext from "../store/CartContext";
import { currencyFormatter } from "../util/formating";
import Buttons from "./UI/Buttons";
import UserProgresContext from "../store/UserProgresContext";

const Cart = () => {
  const cartCtx = useContext(CatContext);
  const userProgressCtx = useContext(UserProgresContext);

  const cartTortal = cartCtx.items.reduce(
    (totalPirce, item) => totalPirce + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTortal)}</p>
      <p className="modal-actions">
        <Buttons textOnly onClick={handleCloseCart}>
          Close
        </Buttons>
        <Buttons onClick={handleCloseCart}>Go to Checkout</Buttons>
      </p>
    </Modal>
  );
};

export default Cart;
