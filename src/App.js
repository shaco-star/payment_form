import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [state, setState] = useState({
    cardName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((pre) => {
      if (name === "cardName") {
        return {
          ...pre,
          [name]: value.substring(0, 19),
        };
      } else if (name === "cardNumber") {
        return {
          ...pre,
          [name]: value.substring(0, 16),
        };
      } else if (name === "mm" || name === "yy") {
        return {
          ...pre,
          [name]: value.substring(0, 2),
        };
      } else if (name === "cvc") {
        return {
          ...pre,
          [name]: value.substring(0, 3),
        };
      }
    });
  }

  return (
    <div className="main">
      <Cards formValues={state} />
      <Form value={state} handleChange={handleChange} />
    </div>
  );
}

export default App;
