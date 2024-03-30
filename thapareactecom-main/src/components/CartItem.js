import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = (props) => {
    const MEDIA_URL = "http://127.0.0.1:8000"
  const { removeItem } = useCartContext();
  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
          <img src={`${MEDIA_URL}${props.product.image}`}/>  
          </figure>
        </div>
        <div>
          <p>{props.product.name}</p>
         
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={props.product.price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={props.quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={parseFloat(props.product.price) * props.quantity} />
        </p>
      </div>

      {/* <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(props.product.id)} />
      </div> */}
    </div>
  );
};

export default CartItem;