import { currencies } from "../../../currencies";
import "./style.css";

const Select = () => {
  const currency = currencies[0];
  return (
    <select
      className="form__select"
      value={currency}
    >
      {currencies.map((currency) => (
        <option key={currency.shortcut} value={currency.shortcut}>
          {currency.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
