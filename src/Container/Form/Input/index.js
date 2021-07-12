import { useState } from "react";
import "./style.css";

const Input = () => {
    const [amount, setAmount] = useState("");
  return (
    <input
              className="form__input"
              placeholder="wpisz kwotę"
              type="number"
              min="1"
              step="any"
              value={amount}
              required
              name="pln"
              onChange={(event) => setAmount(event.target.value)}
            />
  );
};

export default Input;