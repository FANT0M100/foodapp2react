import { useContext } from "react";
import { currencyFormatter } from "../util/formating";
import Buttons from "./UI/Buttons";
import CatContext from "../store/CartContext";

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CatContext);

  function handleAddMealToCart() {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Buttons onClick={handleAddMealToCart}>Add to Cart</Buttons>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
