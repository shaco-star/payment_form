import React from "react";
import Logo from "../images/card-logo.svg";

function FrontCard({ name, number, mm, yy }) {
  return (
    <div className="card card__front">
      <img className="logo" src={Logo} alt="front card logo" />
      <div className="card__numbers">
        <p>{number === "" ? "0000 0000 0000 0000" : number}</p>
      </div>
      <div className="card__info">
        <div className="card__info__name">
          {name === "" ? "JANE APPLESEED" : name}
        </div>
        <div className="card__info__date">
          {mm === "" ? "00" : mm}/{yy === "" ? "00" : yy}
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
