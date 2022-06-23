import React, { useEffect, useState } from "react";
const Cart = (props) => {
  const { cartNumber, setCartNumber, cartItems, setCartItems } = props;
  const [total, setTotal] = useState(0);
  const duplicates = [];

  const organizeCart = () => {
    //this finds all duplicates in cart, and iterates their quantity
    cartItems.forEach((item) => {
      if (item.quantity > 1) {
        return;
      } else {
        cartItems.forEach((item) => {
          if (!item.description in duplicates) {
            duplicates[item.description] =
              (duplicates[item.description] || 0) + 1;
          }
        });
        cartItems.forEach((item) => {
          if (!item.description in duplicates) {
            item.quantity = duplicates[item.description];
          }
        });
      }
    });
  };

  useEffect(() => {
    organizeCart();
    let newCartItemsArray = cartItems.filter(
      //filtering out duplicates in new array of cart items
      (value, index, self) =>
        index === self.findIndex((t) => t.description === value.description)
    );
    setCartItems([...newCartItemsArray]);
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartNumber, cartItems]);

  const removeItem = (e) => {
    e.preventDefault();
    setCartNumber(cartNumber - 1);

    cartItems.forEach((item) => {
      if (
        item.description ==
        e.target.parentElement.parentElement.children[1]
          .textContent
      ) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
          cartItems.splice(cartItems.indexOf(item), 1);
        }
      }
    });
    setCartItems(cartItems);
  };

  const addItem = (e) => {
    e.preventDefault();
    setCartNumber(cartNumber + 1);

    cartItems.forEach((item) => {
      if (
        item.description ==
        e.target.parentElement.parentElement.children[1].textContent
      ) {
        item.quantity = item.quantity + 1;
      }
    });
    setCartItems(cartItems);
  };

  function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

  const calculateTotal = () => {
    console.log("cart Items", cartItems);
    const totalPrice = cartItems.reduce((total, item) => {
      console.log(`Total: ${total}`);
      console.log(`Item: ${item.price * item.quantity}`);
      return roundToTwo(total + item.price * item.quantity)
    }, 0);
    setTotal(totalPrice);
  };
  return (
    <div>
      <h1 className="cartHeader">Cart Items:</h1>
      <div className="cartDisplay">
        {cartItems.map((arr) => {
          return (
            <div key={arr.id} id={arr.id} className="cartItem">
              <img src={arr.picture} alt={arr.description}></img>
              <div>{arr.description}</div>
              <div>${arr.price}</div>
              <div className="removeAndAddCartItem">
                <button onClick={removeItem} className="cartMinusButton">
                  —
                </button>
                <div>{arr.quantity}</div>
                <button className="cartPlusButton" onClick={addItem}>
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="priceAndCheckout">
        <div className="totalPrice">Total Price: ${total}</div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
