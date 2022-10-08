import React from "react";

import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

function Cards({ formValues }) {
  return (
    <div className="cards__section">
      <div className="cards__holder">
        <FrontCard name={formValues.cardName} number={formValues.cardNumber} mm={formValues.mm} yy={formValues.yy}
        />
        <BackCard cvc={formValues.cvc}/>
      </div>
    </div>
  );
}

export default Cards;
