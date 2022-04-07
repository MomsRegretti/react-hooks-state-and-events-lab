import React, {useState} from "react";


function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const appClass = isInCart ? "in-cart" : ""
  const btnClass = isInCart ? "remove" : "add"

  function handleCartClick(){
    setIsInCart(!isInCart)
  }
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleCartClick}>{isInCart ? "Remove from" : "add to"} Cart</button>
    </li>
  );
}

export default Item;
