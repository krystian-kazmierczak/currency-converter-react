import { Field } from "../styled";

const Select = ({ currencies, currency, setCurrency }) => {
  return (
    <Field
      as="select"
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.currency}
        </option>
      ))}
    </Field>
  );
};

export default Select;
