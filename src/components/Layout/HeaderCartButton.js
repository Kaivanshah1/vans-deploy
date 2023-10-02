import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../Store/card-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);
  let noOfCartItems = cartCtx.item.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
