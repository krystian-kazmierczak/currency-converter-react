import { currencies } from "../currencies";
import { Field } from "../styled";

const Select = ({ currency, setCurrency }) => {
  return (
    <Field
      as="select"
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency.shortcut} value={currency.shortcut}>
          {currency.name}
        </option>
      ))}
    </Field>
  );
};

export default Select;
