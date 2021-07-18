import React from "react";
import Card from "../Howitworks/cards";

export default function index() {
  return (
    <div className="howitworks">
      <h2>How it Works</h2>
      <div className="cardsbox">
        <Card
          topic="Signup"
          desc="Create & verify account"
          imgUrl="register.svg"
        />
        <Card
          topic="Send & Receive cash"
          desc="Send & Receive money from anyone, anywhere in the world"
          imgUrl="mobile.svg"
        />
        <Card
          topic="Withdraw"
          desc="Withdraw funds via direct Bank deposit, spend using our virtual Dollar card, or move your money to Bundle , Lemonade , Barter etc"
          imgUrl="wallet.svg"
        />
      </div>
    </div>
  );
}
