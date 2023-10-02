import { useReducer } from "react";
import CartContext from "./card-context";

const initialState = {
  item: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.item[existingCartItemIndex];
    let updateItem;
    let updateItems;

    if (existingCartItem) {
      updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.item];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.item.concat(action.item);
    }

    return {
      item: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
    if (action.type === "REMOVE") {
      const updateTotalAmount = state.totalAmount - existingItem.price

      const existingCartItemIndex = state.item.findIndex(
          (id) => id === action.id
      );
    }

  return initialState;
};

const CartProvider = (props) => {
  const [cartItems, dispatchCartItem] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartItem({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartItems.item,
    totalAmount: cartItems.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
