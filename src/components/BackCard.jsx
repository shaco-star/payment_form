import React from "react";

function BackCard({cvc}) {
  return (
    <div className="card card__back">
      <div className="card__info">{cvc ==='' ? '000' : cvc}</div>
    </div>
  );
}

export default BackCard;
