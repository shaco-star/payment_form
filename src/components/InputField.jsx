import { useState } from "react";
import complete from "../images/icon-complete.svg";
import Input from "./Input";

function InputField({ value, handleChange }) {
  const [confirm, setConfirm] = useState(false);
  const error = {
    empty: "Cant be blank",
    nan: "Wrong format, numbers only",
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      value.cardName &&
      value.cardNumber &&
      value.mm &&
      value.yy &&
      value.cvc
    ) {
      if (
        !/[a-z]/.test(value.mm) &&
        !/[a-z]/.test(value.yy) &&
        !/[a-z]/.test(value.cvc) &&
        !/[a-z]/.test(value.cardNumber)
      ) {
        setConfirm(true);
      }
    }

    console.log(confirm);
  }

  return (
    <form>
      {!confirm ? (
        <>
          <Input
            id="name"
            value={value.cardName}
            handleChange={handleChange}
            error={error}
            label="cardholder name"
            name="cardName"
            pattern="[A-Za-z0-9]{1,20}"
            placeholder='e.g. Jane Appleseed'
          />
          <Input
            id="number"
            value={value.cardNumber}
            handleChange={handleChange}
            error={error}
            label="Card number"
            name="cardNumber"
            pattern="[0-9]+"
            placeholder='e.g. 1234 5678 9123 0000'
          />
          <div className="input__container__small">
            <Input
              id="mm"
              value={value.mm}
              handleChange={handleChange}
              error={error}
              label="EXP. DATA"
              name="mm"
              pattern="[0-9]+"
              placeholder='MM'
            />
            <Input
              id="yy"
              value={value.yy}
              handleChange={handleChange}
              error={error}
              label="(MM/YY)"
              name="yy"
              pattern="[0-9]+"
              placeholder='YY'
            />
            <Input
              id="cvc"
              value={value.cvc}
              handleChange={handleChange}
              error={error}
              label="CVC"
              name="cvc"
              pattern="[0-9]+"
              placeholder='e.g. 123'
            />
          </div>
        </>
      ) : (
        <div className="confirmation">
          <img src={complete} alt="confirmation icon" />
          <p className="big__text">thank you!</p>
          <p className="small__text">We ve added your card details</p>
        </div>
      )}

      <button onClick={handleSubmit}>Confirm</button>
    </form>
  );
}

export default InputField;
