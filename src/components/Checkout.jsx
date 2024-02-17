import { useContext } from "react";
import Modal from "./UI/Modal";
import CatContext from "../store/CartContext";
import { currencyFormatter } from "../util/formating";
import Input from "./UI/Input";
import Buttons from "./UI/Buttons";
import UserProgresContext from "../store/UserProgresContext";

const Checkout = () => {
  const cartCtx = useContext(CatContext);
  const userProgressCtx = useContext(UserProgresContext);

  const cartTortal = cartCtx.items.reduce(
    (totalPirce, item) => totalPirce + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTortal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Buttons type="button" textOnly onClick={handleClose}>
            Close
          </Buttons>
          <Buttons>Submit Order</Buttons>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
