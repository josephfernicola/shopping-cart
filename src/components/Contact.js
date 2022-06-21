import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contactContainer">
      <ul className="socialMedia">
        <li><a href="http://www.facebook.com">{<BsFacebook size={70} />}</a></li>
        <li><a href="http://www.instagram.com">{<BsInstagram size={70} />}</a></li>
        <li><a href="http://www.twitter.com">{<BsTwitter size={70} />}</a></li>
      </ul>
      <div className="emailAndAddress">
        <div>Email us at AmericanSeagull@gmail.com</div>
        <div>583 Westchester Drive</div>
        <div>Chicago, Illinois 60018</div>
      </div>
    </div>
  );
};

export default Contact;
