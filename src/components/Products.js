import React from "react";
import womanJeans from "../images/womanJeans.webp";
import womanDress from "../images/womanDress.jpeg";
import romper from "../images/romper.jpeg";
import skirt from "../images/skirt.webp";
import menJeans from "../images/menJeans.webp";
import menJacket from "../images/menJacket.jpeg";
import flannel from "../images/flannel.webp";
import fedora from "../images/fedora.webp";
import womanJacket from "../images/womanJacket.webp";
import tankTop from "../images/tankTop.webp";
import sandals from "../images/sandals.webp";
import crewneck from "../images/crewneck.webp";
import uniqid from "uniqid";

const Products = (props) => {
  const { cartNumber, setCartNumber, cartItems, setCartItems } = props;

  const addToCart = (e) => {
    setCartNumber(cartNumber + 1);
    cartItems.forEach((item) => {
      if (item.description == e.target.parentElement.children[1].textContent) {
        item.quantity = item.quantity + 1;
      }
    });

    setCartItems([
      ...cartItems,
      {
        picture: e.target.parentElement.children[0].src,
        description: e.target.parentElement.children[1].textContent,
        price: e.target.parentElement.children[2].children[1].textContent,
        quantity: 1,
        id: uniqid(),
      },
    ]);
    e.target.parentElement.children[3].textContent = "✓ Added to Cart!";

    setTimeout(() => {
      e.target.parentElement.children[3].textContent = "";
    }, 1000);
  };

  return (
    <div>
      <ul className="productList">
        <li className="product">
          <img src={womanJeans} alt="Women's Jeans"></img>
          <div>Mid-Rise Super Skinny Jeans for Women</div>
          <div className="price">
            <div>$</div>
            <div>62.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={womanDress} alt="Women's Dress"></img>
          <div>Quarter Sleeve Polka Dot White Dress</div>
          <div className="price">
            <div>$</div>
            <div>38.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={romper} alt="Romper"></img>
          <div>Sleeveless Strapless Summer Romper</div>
          <div className="price">
            <div>$</div>
            <div>22.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={skirt} alt="Skirt"></img>
          <div>Plaid Pull-On Midi Skirt</div>
          <div className="price">
            <div>$</div>
            <div>26.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={menJeans} alt="Men's Jeans"></img>
          <div>Men's Jeans</div>
          <div className="price">
            <div>$</div>
            <div>32.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={menJacket} alt="Men's Jacket"></img>
          <div>Men's Leather Jacket</div>
          <div className="price">
            <div>$</div>
            <div>107.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={flannel} alt="Men's Flannel"></img>
          <div>Men's Flannel Shirt</div>
          <div className="price">
            <div>$</div>
            <div>91.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={fedora} alt="Fedora"></img>
          <div>Fedora</div>
          <div className="price">
            <div>$</div>
            <div>39.95</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={womanJacket} alt="Women's Denim Jacket"></img>
          <div>Women's Denim Jacket</div>
          <div className="price">
            <div>$</div>
            <div>43.00</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={tankTop} alt="Tank Top"></img>
          <div>Women's Tank Top</div>
          <div className="price">
            <div>$</div>
            <div>14.95</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={sandals} alt="Men's Sandals"></img>
          <div>Reef Men's Sandals</div>
          <div className="price">
            <div>$</div>
            <div>34.95</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
        <li className="product">
          <img src={crewneck} alt="Men's Crew neck"></img>
          <div>Men's Crew neck Sweatshirt</div>
          <div className="price">
            <div>$</div>
            <div>24.95</div>
          </div>
          <div className="addedToCartMessage"></div>
          <button onClick={addToCart}>Add To Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Products;
