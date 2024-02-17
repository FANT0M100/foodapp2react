import { currencyFormatter } from "../util/formating";

const CartItem = ({ name, quantity, price, onIncrise, onDecrease }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrise}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
