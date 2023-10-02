import classes from "./MealItem.module.css";
import Mealform from "./Mealform";
import CartContext from "../../Store/card-context";
import { useContext } from "react";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.h3}>{props.name}</h3>
        <div className={classes.price}>{price}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <Mealform id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
