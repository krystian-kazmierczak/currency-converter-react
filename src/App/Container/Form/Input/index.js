import { Field } from "../styled";

const Input = ({ amount, setAmount }) => {
  return (
    <Field
      placeholder="wpisz kwotę"
      type="number"
      min="0.01"
      step="any"
      value={amount}
      required
      name="pln"
      onChange={(event) => setAmount(event.target.value)}
    />
  );
};

export default Input;
