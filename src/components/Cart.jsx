import { useContext } from "react";
import Modal from "./UI/Modal";
import CatContext from "../store/CartContext";
import { currencyFormatter } from "../util/formating";
import Buttons from "./UI/Buttons";
import UserProgresContext from "../store/UserProgresContext";
import CartItem from "./CartItem";

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

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrise={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTortal)}</p>
      <p className="modal-actions">
        <Buttons textOnly onClick={handleCloseCart}>
          Close
        </Buttons>
        {cartCtx.items.length > 0 && (
          <Buttons onClick={handleGoToCheckout}>Go to Checkout</Buttons>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
