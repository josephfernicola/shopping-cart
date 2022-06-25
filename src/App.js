import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homepageImage from "./images/homepageImage.webp";

function App() {
  return (
    <div className="homepageContainer">
      <div className="homepage">
        <div className="homepageDescription">
          <div>
            <strong>Voted best online clothing store by FakeClothes.com</strong>
          </div>
          <div>
            <strong>We don't follow trends, we are the trends</strong>
          </div>
          <Link to="/products">
            <button className="homepageButton">
              <strong>Shop Now</strong>
            </button>
          </Link>
        </div>
        <div className="homepageImage">
          <img src={homepageImage} alt="homepage" />
        </div>
      </div>
    </div>
  );
}

export default App;
